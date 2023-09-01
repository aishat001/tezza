import { styled, alpha } from '@mui/material/styles';
import { ListItemIcon, Menu, MenuItem, MenuProps, SvgIconTypeMap } from '@mui/material';
import React, { MouseEventHandler, SetStateAction, useState } from 'react'
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface StyledMenuProps {
    logo1?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
    logo2?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
    open: boolean;
    anchorEl: null | HTMLElement;
    setAnchorEl: React.Dispatch<SetStateAction<null | HTMLElement>>;
    text1?: string;
    text2?: string;
    display?: string;
    onClickText1?: () => void;
    onClickText2?: () => void;
}

const StyledMenuComp = (props: StyledMenuProps) => {
    const IconComponent = props.logo1;
    const IconComponent2 = props.logo2;

    const StyledMenu = styled((props: MenuProps) => (
        <Menu
            elevation={0}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            {...props}
        />
    ))(({ theme }) => ({
        '& .MuiPaper-root': {
            borderRadius: 6,
            marginTop: theme.spacing(1),
            minWidth: 180,
            color:
                theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
            boxShadow:
                'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
            '& .MuiMenu-list': {
                padding: '4px 0',
            },
            '& .MuiMenuItem-root': {
                '& .MuiSvgIcon-root': {
                    fontSize: 18,
                    color: theme.palette.text.secondary,
                    marginRight: theme.spacing(1.5),
                },
                '&:active': {
                    backgroundColor: alpha(
                        theme.palette.primary.main,
                        theme.palette.action.selectedOpacity,
                    ),
                },
            },
            '& .MuiListItemIcon-root': {
                display: props.display,
            }
        },
    }));

    const handleClose = () => {
        props.setAnchorEl(null);
    };

    return (
        <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
            }}
            anchorEl={props.anchorEl}
            open={props.open}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose} disableRipple>
                <div onClick={props.onClickText1}>
                    <ListItemIcon>
                        {IconComponent && <IconComponent fontSize="small" />}
                    </ListItemIcon>
                    {props.text1}
                </div>
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
                <div onClick={props.onClickText2}>
                    <ListItemIcon >
                        {IconComponent2 && <IconComponent2 fontSize="small" />}
                    </ListItemIcon>
                    {props.text2}
                </div>
            </MenuItem>
        </StyledMenu>
    )
}

export default StyledMenuComp;
