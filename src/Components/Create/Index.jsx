import { PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input, List, Typography } from "antd";
import { useState } from "react";
import './style.css'

function CreateMod() {

    const [links, setLinks] = useState([]);


    return (
        <div className="create-mod">
            <div>
                <label>Titulo del mod</label>
                <Input />
            </div>
            <div>
                <label>Descripcion</label>
                <Input.TextArea />
            </div>
            <div style={{ margin: '10px 0px' }}>
                <Button type="primary">
                    Guardar
                </Button>
            </div>
            <div style={{ height:'100%' }}>
                <Divider> Links de descarga de mods </Divider>
                <List
                    header={<div>
                        <Input.Group>
                            <Input style={{ width: 'calc(100% - 35px)' }} defaultValue="https://ant.design" />
                            <Button type="primary" icon={<PlusOutlined />} />
                        </Input.Group>
                    </div>}
                    bordered
                    dataSource={links}
                    renderItem={item => (
                        <List.Item>
                            <Typography.Text mark>[ITEM]</Typography.Text> {item}
                        </List.Item>
                    )}
                />
            </div>
        </div>
    );
}

export default CreateMod;