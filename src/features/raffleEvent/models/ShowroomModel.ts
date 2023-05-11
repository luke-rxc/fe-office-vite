import { TOption } from '@components/Select';
import { ShowroomComboItemSchema, ShowroomComboSchema } from '../schemas';

/**
 * showroom combo item model
 */
export interface ShowroomComboItemModel extends TOption {}

/**
 * showroom combo model
 */
export interface ShowroomComboModel {
  items: Array<ShowroomComboItemModel>;
}

/**
 * showroom combo item schema -> model convert
 */
export const toShowroomComboItemModel = (item: ShowroomComboItemSchema): ShowroomComboItemModel => {
  return {
    value: item.id,
    label: item.name,
  };
};

/**
 * showroom combo item array schema -> model convert
 */
export const toShowroomComboModel = ({ items }: ShowroomComboSchema): Array<ShowroomComboItemModel> => {
  return items.map(toShowroomComboItemModel);
};
