import { useState, useEffect, useCallback } from 'react';
import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Box, Breadcrumbs, Button, Container, Grid, Link, Typography } from '@material-ui/core';
import { customerApi } from '../../../__fakeApi__/customerApi';
import { CustomerListTable } from '@components/customer';
import useMounted from '@hooks/useMounted';
import ChevronRightIcon from '@assets/icons/ChevronRight';
import DownloadIcon from '@assets/icons/Download';
import PlusIcon from '@assets/icons/Plus';
import UploadIcon from '@assets/icons/Upload';
import useSettings from '@hooks/useSettings';
import gtm from '@libs/gtm';
import type { Customer } from '../../../schemas/customer';

const MemberGeneralList: FC = () => {
  const mounted = useMounted();
  const { settings } = useSettings();
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  const getCustomers = useCallback(async () => {
    try {
      const data = await customerApi.getCustomers();

      if (mounted.current) {
        setCustomers(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [mounted]);

  useEffect(() => {
    getCustomers();
  }, [getCustomers]);

  return (
    <>
      <Helmet>
        <title>Dashboard: Customer List | Material Kit Pro</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 8,
        }}
      >
        <Container maxWidth={settings.compact ? 'xl' : false}>
          <Grid container justifyContent="space-between" spacing={3}>
            <Grid item>
              <Typography color="textPrimary" variant="h5">
                Customer List
              </Typography>
              <Breadcrumbs aria-label="breadcrumb" separator={<ChevronRightIcon fontSize="small" />} sx={{ mt: 1 }}>
                <Link color="textPrimary" component={RouterLink} to="/member" variant="subtitle2">
                  일반 유저 관리
                </Link>
                <Typography color="textSecondary" variant="subtitle2">
                  회원 조회
                </Typography>
              </Breadcrumbs>
              <Box
                sx={{
                  mb: -1,
                  mx: -1,
                  mt: 1,
                }}
              >
                <Button color="primary" startIcon={<UploadIcon fontSize="small" />} sx={{ m: 1 }}>
                  Import
                </Button>
                <Button color="primary" startIcon={<DownloadIcon fontSize="small" />} sx={{ m: 1 }}>
                  Export
                </Button>
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ m: -1 }}>
                <Button color="primary" startIcon={<PlusIcon fontSize="small" />} sx={{ m: 1 }} variant="contained">
                  Add Customer
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ mt: 3 }}>
            <CustomerListTable customers={customers} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default MemberGeneralList;
