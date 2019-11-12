export default {
  name: 'ElTableFooter',

  render(h) {
    const sums = [];
    this.columns.forEach((column, index) => {
      if (index === 0) {
        sums[index] = this.sumText;
        return;
      }
      const values = this.store.states.data.map(item => Number(item[column.property]));
      const precisions = [];
      let notNumber = true;
      values.forEach(value => {
        if (!isNaN(value)) {
          notNumber = false;
          let decimal = ('' + value).split('.')[1];
          precisions.push(decimal ? decimal.length : 0);
        }
      });
      const precision = Math.max.apply(null, precisions);
      if (!notNumber) {
        sums[index] = values.reduce((prev, curr) => {
          const value = Number(curr);
          if (!isNaN(value)) {
            return parseFloat((prev + curr).toFixed(Math.min(precision, 20)));
          } else {
            return prev;
          }
        }, 0);
      } else {
        sums[index] = '';
      }
    });

    return (
      <table
        class="el-table__footer"
        cellspacing="0"
        cellpadding="0"
        border="0">
        <colgroup>
          {
            this._l(this.columns, column =>
              <col
                name={ column.id }
                width={ column.width || column.realWidth }
              />)
          }
          {
            !this.fixed && this.layout.gutterWidth
              ? <col name="gutter" width={ this.layout.scrollY ? this.layout.gutterWidth : '' }></col>
              : ''
          }
        </colgroup>
        <tbody>
          <tr>
          {
            this._l(this.columns, (column, cellIndex) =>
              <td
                key={ cellIndex }
                colspan={ column.colSpan }
                rowspan={ column.rowSpan }
                class={ this.getFooterCellClass(cellIndex, this.columns, column) }
                <div class={ ['cell', column.labelClassName] }>
                {
                  this.summaryMethod ? this.summaryMethod({ columns: this.columns, data: this.store.states.data })[cellIndex] : sums[cellIndex]
                }
                </div>
              </td>
            )
          }
          {
            !this.fixed && this.layout.gutterWidth
              ? <td class="gutter" style={{ width: this.layout.scrollY ? this.layout.gutterWidth + 'px' : '0' }}></td>
              : ''
          }
          </tr>
        </tbody>
      </table>
    );
  },

  props: {
    fixed: String,
    store: {
      required: true
    },
    layout: {
      required: true
    },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: {
      type: Object,
      default() {
        return {
          prop: '',
          order: ''
        };
      }
    }
  },

  computed: {
    isAllSelected() {
      return this.store.states.isAllSelected;
    },

    columnsCount() {
      return this.store.states.columns.length;
    },

    leftFixedCount() {
      return this.store.states.fixedColumns.length;
    },

    rightFixedCount() {
      return this.store.states.rightFixedColumns.length;
    },

    columns() {
      return this.store.states.columns;
    }
  },

  methods: {
    isCellHidden(index, columns) {
      if (this.fixed === true || this.fixed === 'left') {
        return index >= this.leftFixedCount;
      } else if (this.fixed === 'right') {
        let before = 0;
        for (let i = 0; i < index; i++) {
          before += columns[i].colSpan;
        }
        return before < this.columnsCount - this.rightFixedCount;
      } else {
        return (index < this.leftFixedCount) || (index >= this.columnsCount - this.rightFixedCount);
      }
    },
    getFooterCellClass(columnIndex, row, column) {
      const classes = [column.id, column.headerAlign, column.className, column.labelClassName];
      if (this.isCellHidden(columnIndex, row)) {
        classes.push('is-hidden');
      }
      if (!column.children) {
        classes.push('is-leaf');
      }
      return classes.join(' ');
    }
  }
};
