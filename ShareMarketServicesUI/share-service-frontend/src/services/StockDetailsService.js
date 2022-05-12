import axios from 'axios';

const SAVE_STOCK_SERVICE_URL = "http://localhost:9191/stock";
// const stockDetails = {
//     "name":"Britania",
//     "exchange":"NSE",
//     "cap":"LARGE",
//     "category":"FMCG"
// };

class StockService {
    saveStockDetails(stockDetails){
        console.log(stockDetails);
        alert('StockService saveStockDetails');
        return axios.post(SAVE_STOCK_SERVICE_URL,stockDetails) 
    }

 
}

export default new StockService()