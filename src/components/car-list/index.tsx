import { Avatar, Button, List, Tag } from "antd";
import { CarlistType } from "./car-list.type";

const Carlist = (props: CarlistType) => {
    const { list, onAdd, onMinus, addButton, changValueButton } = props;
    console.log(list);
    
    return (
        <List
            itemLayout="horizontal"
            dataSource={list}
            renderItem={(item, index) => (
                <List.Item key={`${item.title}`}>
                    <List.Item.Meta
                        avatar={<Avatar src={item.photo} />}
                        title={item.title}
                        description={`${item.price} THB/Day`}
                    />
                    {addButton && <div>
                        <Button
                            onClick={() => onAdd({
                                ...item
                            })} type="dashed"
                            data-testId={`button_${index}_add`}
                        >
                            Add to Cart
                        </Button>
                    </div>}

                    {changValueButton && <div>
                        <Button
                            onClick={() => onMinus({
                                ...item
                            })} 
                            type="dashed"
                            data-testId={`button_${index}_minus`}
                            >
                            -
                        </Button>
                        <Tag style={{ margin: '4px' }} bordered={false}>{item.total}</Tag>
                        <Button
                            onClick={() => onAdd({
                                ...item
                            })} 
                            type="dashed"
                            data-testId={`button_${index}_plus`}
                            >
                            +
                        </Button>
                    </div>}



                </List.Item>
            )}
        />)
};

Carlist.defaultProps = {
    list: [],
    onAdd: {},
    onMinus: {},
    addButton: false,
    changValueButton: false
}

export default Carlist;