import Ewa from '../Food/EwwaAgoyin.png'
import ofada from '../Food/OfadaRice.png'
import sea_food_okro from '../Food/SeaFoodOkro.png'
import friderice from '../Food/SpecialFriedRice.png'



const foodDescription = [

    {
    
     id: 1,
     url: ofada,
     name: 'ofada',
     description: 'a short brown variety of rice grown locally in Nigeria',
     price: 2500,
     rating : 4
    
    },
    
    {
     id: 2,
     url: Ewa,
     name: 'EwwaAgoin',
     description: 'premium beans and oil',
     price: 1500,
     rating : 3,
    },
    
    
    {  
     id: 3,
     url: sea_food_okro,
     description: '',
     name:'Sea food okro',
     price: 5000,    
     rating : 2,
    },
    
    
    {  
     id: 4,
     url: friderice,
     description: '',
     name: 'Special Rice',
     price: 3500,
     rating : 1,
    },
    
    ];

    export default foodDescription