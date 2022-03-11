Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true,
  },
  properties: {
    address: {
      type: Object,
      value: {},
    },
    customIcon: {
      type: String,
      value: 'edit-1',
    },
    extraSpace: {
      type: Boolean,
      value: true,
    },
    isDrawLine: {
      type: Boolean,
      value: true,
    },
  },
  externalClasses: [
    'item-wrapper-class',
    'title-class',
    'default-tag-class',
    'normal-tag-class',
    'address-info-class',
    'delete-class',
  ],
  methods: {
    onDelete(e) {
      const { item } = e.currentTarget.dataset;
      this.triggerEvent('onDelete', item);
    },
    onSelect(e) {
      console.log('onSelect: ', e);

      const { item } = e.currentTarget.dataset;
      // 订单选择收货地址的点击事件
      this.triggerEvent('onSelect', item);
    },
    onEdit(e) {
      const { item } = e.currentTarget.dataset;
      console.log('onEdit: ', item);
      this.triggerEvent('onEdit', item);
    },
  },
});
