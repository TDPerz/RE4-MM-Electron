import {List} from 'antd'

const mods = Array.from({length:20}).map((_, index)=>{
    return {id:index, name:`Mod ${index}`, descripcion:`Descripcion del mod No:${index}`, links:[
        { id:1, link:'fdfdfd' },
        { id:2, link:'fdfdfd' },
        { id:3, link:'fdfdfd' }
    ]}
})

function Home() {

    console.log(mods)

    return (
        <div>
            <List
                itemLayout="horizontal"
                size='middle'
                pagination={{
                    pageSize:4
                }}
                dataSource={mods}
                renderItem={item=>(
                    <List.Item key={item.id}>
                        <List.Item.Meta
                            title={item.name}
                            description={item.descripcion}
                        />
                    </List.Item>
                )}
            />
        </div>
    );
}

export default Home;