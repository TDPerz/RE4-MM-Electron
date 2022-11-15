import { Outlet } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import './container.css';
import TitleBar from "../Windows/titlebar/Index";
import { useEffect } from "react";
import $ from 'jquery';

function Containers() {

    const navigation = useNavigate()
    const location = useLocation()

    useEffect(()=>{
        fetch({
            url: 'https://www.mediafire.com/file/uw97ehn4wefp4n2/CerealyLeche.zip/file',
            method: 'GET'
        }).then(resp => resp.text()).then( res => {
            console.log(res)
            const elemento = $(res, '#downloadButton')
            console.log(elemento.text())
        }).catch(err => {
            console.log(err)
        })
    })

    return (
        <Layout>
            <TitleBar/>
            <Layout style={{ height:'100%', overflow:"auto" }}>
                <Layout.Sider theme="dark">
                    <Menu selectedKeys={location.pathname} theme="dark">
                        <Menu.Item key={'/'} onClick={() => { navigation('/') }}>
                            Inicio
                        </Menu.Item>
                        <Menu.Item key={'/addmod'} onClick={() => { navigation('/addmod') }}>
                            Agregar Mod
                        </Menu.Item>
                        <Menu.Item key={'/settings'} onClick={() => navigation('/settings')}>
                            Ajustes
                        </Menu.Item>
                    </Menu>
                </Layout.Sider>
                <Layout.Content style={{ overflow:'auto' }}>
                    <Outlet></Outlet>
                </Layout.Content>
            </Layout>
        </Layout>
    );
}

export default Containers;