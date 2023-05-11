const { whenDev, whenProd } = require('@craco/craco');
const { DefinePlugin } = require('webpack');
const CracoAlias = require('craco-alias');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const git = require('git-rev-sync');

/** process environments */
const locally = process.env.REACT_APP_BUILD_ENV === 'local';
const isOnServer = process.env.npm_lifecycle_event.includes('start');
const useBundleAnalyzer = locally && !isOnServer;

const smp = new SpeedMeasurePlugin({
  ...(useBundleAnalyzer
    ? {
        outputTarget: './build/bundle-smp-report.dat',
        outputFormat: 'human',
        loaderTopFiles: 10,
      }
    : {}),
});

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: 'tsconfig.paths.json',
        debug: false,
      },
    },
  ],
  webpack: smp.wrap({
    configure: (webpackConfig, { env }) => {
      whenProd(() => {
        // Datadog Sourcemap 매핑을 위해 주석 처리, aws 배포시 map 파일 관리
        // webpackConfig.devtool = false;
      });

      // 공통 Chunks 처리 추가
      webpackConfig.optimization.splitChunks = {
        ...webpackConfig.optimization.splitChunks,
        ...{
          cacheGroups: {
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              minSize: 10000,
              maxSize: 400000,
            },
          },
        },
      };

      webpackConfig.plugins.push(
        new DefinePlugin({
          'process.env.REACT_APP_DATADOG_VERSION': JSON.stringify(git.short()),
        }),
      );

      // 로컬 빌드인 경우 분석 도구 추가
      if (useBundleAnalyzer) {
        /** Webpack Plugins */
        webpackConfig.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: 'bundle-report.html',
            generateStatsFile: true,
            statsFilename: 'bundle-stats.json',
          }),
        );
        webpackConfig.plugins.push(new SimpleProgressWebpackPlugin({ format: 'compact' }));
      }

      // 개발 환경 설정 (dev server)
      whenDev(() => {
        webpackConfig.plugins.push(new SimpleProgressWebpackPlugin({ format: 'expanded' }));
      });

      return webpackConfig;
    },
  }),
};
