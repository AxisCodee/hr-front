import { useCallback, useMemo, useState } from 'react'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import DrawerForm from '../Componets/DrawerForm/index';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutline';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { Avatar, IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AlertDialog from '../componets/dialog';
import Link from 'next/link';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {GRID_DETAIL_PANEL_TOGGLE_COL_DEF} from '@mui/x-data-grid-pro';

const useReportColumns = (CustomDetailPanelToggle) => {

  const [isDrawerOpenEdit, setIsDrawerOpenEdit] = useState(false);
  const [EditData,setEditData]=useState([])
  const { t } = useTranslation()
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  // data table


      const handleClickOpen = (id) => {
        setDeleteId(id);
        setIsDeletePopupOpen(true);
      };

      const handleClose = () => {
        setIsDeletePopupOpen(false)
      };

  return useMemo(() => [
    // {
    //   field: 'employee',
    //   headerName: t("Employee"),
    //   flex: 1,
    //   disableClickEventBubbling: true,

    // },
    {
      field: 'employee',
      headerName: t("Employee"),
      flex:1,
        renderCell: (params)=>{
      return (
        <Stack spacing={1} direction={'row'}  alignItems={'center'} >
          <Box>
          <Avatar src={'sdsd'} alt='' />
          </Box>
          <Box>
            {params.row.employee}
          </Box>

        </Stack>
      )
    }
  },

    {
      field: 'role',
      headerName: t("Role"),
      flex: 1,
      disableClickEventBubbling: true,

    },
    {
      field: 'spcialization',
      headerName: t("SPECIALIZATION"),
      flex: 1,
      disableClickEventBubbling: true,

    },
    {
      field: 'team',
      headerName: t("TEAM"),
      flex: 1,
      disableClickEventBubbling: true,

    },


    {
      field: 'action',
      headerName: t("ACTION"),
      flex: 1,
      renderCell: (params) => {
        return(
          <>
         <Stack direction={"row"} spacing={2} justifyContent={"center"} marginTop={"10px"} >
        <Box>
        <IconButton onClick={() => handleClickOpen(params.row.id)}>
          <DeleteOutlinedIcon variant="contained" color="error" size='small'>  Delete   </DeleteOutlinedIcon>
          </IconButton>
          </Box>
          <Link href={`/coach/coachProfile/${params.row.id}`} >
              <IconButton >
              <VisibilityIcon  variant="contained" sx={{ color:'#FF9F43' }} size='small'>Details</VisibilityIcon>
              </IconButton>

              </Link>

      </Stack>
      {isDeletePopupOpen && <AlertDialog id={deleteId} open={isDeletePopupOpen} handleClose={handleClose} />}
          </>
      );
    }
    },

  ])


}

export default useReportColumns
