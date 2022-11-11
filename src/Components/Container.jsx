import { Outlet } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import './container.css';

function Containers() {

    const navigation = useNavigate()
    const location = useLocation()

    return (
        <Layout>
            <Layout.Sider theme="dark">
                <Menu selectedKeys={location.pathname} theme="dark">
                    <Menu.Item key={'/'} onClick={() => { navigation('/') }}>
                        Inicio
                    </Menu.Item>
                    <Menu.Item key={'/settings'} onClick={() => navigation('/settings')}>
                        Ajustes
                    </Menu.Item>
                </Menu>
            </Layout.Sider>
            <Layout.Content>
                <Outlet></Outlet>
            </Layout.Content>
        </Layout>
    );
}

export default Containers;