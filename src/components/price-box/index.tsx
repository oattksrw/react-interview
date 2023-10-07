import { useState } from 'react'
import { Discountdata, PriceBoxType } from './price-box.type'
import { Button, Input } from 'antd'
import { config } from '../../utils'
import axios from 'axios'

const PriceBox = (props: PriceBoxType) => {
    const { data } = props
    const [discountInput, setDiscountInput] = useState('')
    const [discount, setDiscount] = useState<number>(0)
    const price: number = data.reduce(
        (accumulator, currentValue) =>
            accumulator + (currentValue.price * (currentValue.total || 0))
        , 0
    )

    let grandTotal: number = price - discount
    grandTotal = grandTotal >= 0 ? grandTotal : 0
    const handleDiscount = () => {
        
        axios.get('https://cdn.contentful.com/spaces/vveq832fsd73/entries?content_type=discount', config)
        .then((res) => {
            if (res.status === 200) {
                const { items } = res.data
                const codeData = items.filter((e: Discountdata) => {
                    return e.fields.code === discountInput
                }) 
                if (codeData.length) {
                    setDiscount(codeData[0].fields.amount)
                }
                
            }
        })
    }
   
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e6e6e6' }}>
                <h3>Total</h3>
                <h3>{price} THB</h3>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e6e6e6' }}>
                <h3>Code</h3>
                <div
                    style={{ padding: '4px', display: 'flex', alignItems: 'center' }}
                >
                    <Input placeholder='code' onChange={e => setDiscountInput(e.target.value)} value={discountInput} />
                    <Button onClick={handleDiscount}>+</Button>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e6e6e6' }}>
                <h3>Discount</h3>
                <h3>{discount} THB</h3>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e6e6e6' }}>
                <h3>Grand Total</h3>
                <h3>{grandTotal} THB</h3>
            </div>
        </div>
    )
}

export default PriceBox