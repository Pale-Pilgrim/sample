import type { Schema, Struct } from '@strapi/strapi';

export interface ContactInfoInfos extends Struct.ComponentSchema {
  collectionName: 'components_contact_info_infos';
  info: {
    displayName: 'Infos';
  };
  attributes: {
    ContactPerson: Schema.Attribute.String;
    EmailAddress: Schema.Attribute.Email;
    PhoneNumber: Schema.Attribute.String;
  };
}

export interface MedicineDetailsMed extends Struct.ComponentSchema {
  collectionName: 'components_medicine_details_meds';
  info: {
    displayName: 'Med';
  };
  attributes: {
    DosageForm: Schema.Attribute.Enumeration<
      [
        'Tablet',
        'Capsule',
        'Syrup',
        'Suspension',
        'Injection',
        'Cream',
        'Ointment',
        'Drops',
        'Inhaler',
      ]
    >;
    Manufacturer: Schema.Attribute.String;
    Strength: Schema.Attribute.String;
  };
}

export interface OrderSummaryOrder extends Struct.ComponentSchema {
  collectionName: 'components_order_summary_orders';
  info: {
    displayName: 'Order';
  };
  attributes: {
    PaymentStatus: Schema.Attribute.Enumeration<
      ['Pending', 'Paid', 'Partially Paid', 'Cancelled']
    >;
    TotalAmount: Schema.Attribute.Integer;
  };
}

export interface StorageInfoStock extends Struct.ComponentSchema {
  collectionName: 'components_storage_info_stocks';
  info: {
    displayName: 'Stock';
  };
  attributes: {
    StorageLocation: Schema.Attribute.String;
    StorageRequirements: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact-info.infos': ContactInfoInfos;
      'medicine-details.med': MedicineDetailsMed;
      'order-summary.order': OrderSummaryOrder;
      'storage-info.stock': StorageInfoStock;
    }
  }
}
