import React , {useState , useEffect , useCallback 
    , useRef } from 'react';
  import Button from '@material-ui/core/Button';
  import {useSelector , useDispatch} from 'react-redux';

  import {getProducts,editProduct}from "../redux/actions/productActions"

  import {Provider} from 'react-redux';
  import {update} from '../api/products';
  import { DataGrid,useGridApi } from '@material-ui/data-grid';
  import {
    GridColumns,
    GridRowsProp,
    useGridApiRef,
    XGrid,
    GridApiRef,
    MuiEvent,
  } from '@material-ui/x-grid';
  import { createMuiTheme, Theme } from '@material-ui/core/styles';
  import { makeStyles } from '@material-ui/styles';
  import { LicenseInfo } from '@material-ui/x-grid';


  const defaultTheme = createMuiTheme();
  const useStyles = makeStyles(
    (theme) => ({
      root: {
        justifyContent: 'center',
        display: 'flex',
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
    }),
    { defaultTheme },
  );
  
  function EditToolbar(props) {
    const { selectedCellParams, apiRef, setSelectedCellParams } = props;
    const classes = useStyles();
  
    const handleClick = () => {
      if (!selectedCellParams) {
        return;
      }
      const { id, field, cellMode } = selectedCellParams;
      if (cellMode === 'edit') {
        const editedCellProps = apiRef.current.getEditCellPropsParams(id, field);
        apiRef.current.commitCellChange(editedCellProps);
        apiRef.current.setCellMode(id, field, 'view');
        setSelectedCellParams({ ...selectedCellParams, cellMode: 'view' });
      } else {
        apiRef.current.setCellMode(id, field, 'edit');
        setSelectedCellParams({ ...selectedCellParams, cellMode: 'edit' });
      }
    };
  
    const handleMouseDown = (event) => {
      // Keep the focus in the cell
      event.preventDefault();
    };
  
    return (
      <div className={classes.root} style={{"justifyContent":"start"}} >
        <Button 
          onClick={handleClick}
          onMouseDown={handleMouseDown}
          disabled={!selectedCellParams}
          color="primary"
        >
          {selectedCellParams?.cellMode === 'edit' ? 'ذخیره' : 'ویرایش'}
        </Button>
      </div>
    );
  }
  LicenseInfo.setLicenseKey(
    'x0jTPl0USVkVZV0SsMjM1kDNyADM5cjM2ETPZJVSQhVRsIDN0YTM6IVREJ1T0b9586ef25c9853decfa7709eee27a1e',
  );
  // ---------------------------------------------*******
  export default function TestPrice() {

    const rows = useSelector(state => state.allProducts.products);
    console.log("rows",rows);
    const apiRef = useGridApiRef();
    console.log("api ref ",apiRef);
    const [selectedCellParams, setSelectedCellParams] =useState({});
    useEffect(() => {
      if(selectedCellParams.cellMode == "edit"){
        // console.log(selectedCellParams);
        let priceAndN = {
          "id": selectedCellParams.row.id,
          "price": selectedCellParams.row.price,
          "title":rows.title,
          /* "number":selectedCellParams.row.number, */
        }
        update(priceAndN);
      }
    }, [selectedCellParams])
    const handleCellClick = React.useCallback((params) => {
      setSelectedCellParams(params);
    }, []);
  
    const handleDoubleCellClick = React.useCallback(
      (params, event) => {
        event.stopPropagation();
      },
      [],
    );
  
    // Prevent from rolling back on escape
    const handleCellKeyDown = React.useCallback(
      (params, event) => {
        if (['Escape', 'Delete', 'Backspace', 'Enter'].includes(event.key)) {
          event.stopPropagation();
        }
      },
      [],
    );
  
    // Prevent from committing on focus out
    const handleCellFocusOut = React.useCallback(
      (params, event) => {
        if (params.cellMode === 'edit' && event) {
          event.defaultMuiPrevented = true;
        }
      },
      [],
    );
  
    return (
      <div style={{ height: 450, width: '100%' }}>
            <XGrid
          rows={rows}
          columns={columns}
          apiRef={apiRef}
          onCellClick={handleCellClick}
          onCellDoubleClick={handleDoubleCellClick}
          onCellFocusOut={handleCellFocusOut}
          onCellKeyDown={handleCellKeyDown}
          components={{
            Toolbar: EditToolbar,
          }}
          componentsProps={{
            toolbar: {
              selectedCellParams,
              apiRef,
              setSelectedCellParams,
            },
          }}
        />

      </div>
    );
  }
  
  const columns = [
    { field: 'id', headerName: 'شماره ردیف', width: 250 },
    {
      field: 'title',
      headerName: 'نام محصول',
      width: 250,
      editable: false,
    },
    {
      field: 'price',
      headerName: 'قیمت',
      type:'number',
      width: 150,
      editable: true,
    },
  /*   {
      field: 'category',
      headerName: 'دسته بندی',
      width: 250,
      editable: true,
    }, */
  /*   {
      field: 'number',
      headerName: 'موجودی',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
  
    }, */
  ];
  