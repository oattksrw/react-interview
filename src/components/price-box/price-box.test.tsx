import { fireEvent, render, screen } from '@testing-library/react';
import Carlist from '.';
import PriceBox from '.';

const mockList = [
    {
      "title": "Honda CIVIC",
      "price": 1400,
      "photo": "https://www.autotirechecking.com/wp-content/uploads/Honda-Civic-eHEV-2022-%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2-3.jpg"
    },
    {
      "title": "Honda Accord",
      "price": 3000,
      "photo": "https://www.thaidriving.com/wp-content/uploads/2021/06/honda-accord.jpg"
    },
    {
      "title": "Audi TT Coupe",
      "price": 19000,
      "photo": "https://www.headlightmag.com/hlmwp/wp-content/uploads/2021/01/143098967_3810759558966969_4868637402134517468_n.jpg"
    },
    {
      "title": "Mercedes Benz e300e",
      "price": 22000,
      "photo": "https://www.checkraka.com/uploaded/article/review/1205/MercedesBenz%20New%20E%20class%20trip%20TH078.jpg"
    },
    {
      "title": "Mazda CX-30",
      "price": 1600,
      "photo": "https://lh6.googleusercontent.com/HbJYijJI0ozpOTfQ3kxJEv46QarQlw_uoVNvMHJp-cYJV9sjtffAlKBlK1TpGlWv0x3Q5LL_9Ne7oaBE41NYiWx2hWneuN3miTX0_DodSVwHbp_GhwcwQKBOVopjVvzCMUG55Lb3"
    },
    {
      "title": "Volvo S60",
      "price": 20000,
      "photo": "https://www.autodeft.com/_uploads/images/2018/Volvo/Volvo%20S60/Volvo%20S60%202019_01.jpg"
    },
    {
      "title": "Toyota Yaris",
      "price": 1200,
      "photo": "https://img.icarcdn.com/autospinn/body/000000102498_2fe44111_636f_46bb_9407_597c08b767b0.jpg"
    }
  ]
  

test('renders price box to have text 1400', () => {
  render(<PriceBox data={mockList} />);
  expect(1400).toBeInTheDocument()
});
