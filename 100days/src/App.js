import Expenseitem from './Component/Expenseitem'

function App(){
    let expensedate= new Date(2020, 3 ,19);
    let expensetitle= 'fee';
    let expenseamount = 300;

    return(
        <div>
            <Expenseitem 
            date={expensedate}
            title={expensetitle}
            amount={expenseamount}
            />
        </div>
    );
}

export default App;