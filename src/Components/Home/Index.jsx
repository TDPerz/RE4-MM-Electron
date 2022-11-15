import {List} from 'antd'
import './Style.css'

const mods = Array.from({length:20}).map((_, index)=>{
    return {id:index, name:`Mod ${index}`, descripcion:`Descripcion del mod No:${index}`, links:[
        { id:1, link:'fdfdfd' },
        { id:2, link:'fdfdfd' },
        { id:3, link:'fdfdfd' }
    ]}
})

function Home() {

    console.log(mods)
    console.log(process.env)

    return (
        <div className='home'>
            <List
                itemLayout="horizontal"
                size='middle'
                pagination={{
                    pageSize:15
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