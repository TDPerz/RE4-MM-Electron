import { Button, Layout } from "antd";
import './style.css'
import { CloseOutlined, FullscreenExitOutlined, FullscreenOutlined, MinusOutlined } from '@ant-design/icons'
import { useState } from "react";
const electron = window.require('electron')
const ipcrenderer = electron.ipcRenderer

function TitleBar() {

    const [isMax, setIsMax] = useState(false);

    ipcrenderer.on('statussize', (event, data)=>{
        console.log(data)
        setIsMax(data.maxi)
    })

    return (
        <Layout.Header className="header-menu">
            <div>
                <p>RE4 - Mod Manager</p>
            </div>
            <div>
                <Button type="primary" onClick={() => {
                    ipcrenderer.send('minimize')
                }}>
                    <MinusOutlined />
                </Button>
                <Button type="primary" onClick={() => {
                    ipcrenderer.send('maximize')
                }}>
                    {isMax ?
                        < FullscreenExitOutlined />
                        :
                        < FullscreenOutlined />
                    }
                </Button>
                <Button type="primary" danger onClick={() => {
                    ipcrenderer.send('close')
                }}>
                    <CloseOutlined />
                </Button>
            </div>
        </Layout.Header>
    );
}

export default TitleBar;