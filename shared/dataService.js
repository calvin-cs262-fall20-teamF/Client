class dataService{
    constructor(){
        this.data = [];
    }

    setData(nData) {
        this.data = nData;
    }
    
    getData(data) {
        return this.data;
    }
}
export default new dataService;