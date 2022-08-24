import Table from "./Component/Table";

function App(){

    let today = new Date().toISOString().slice(0, 10);
    let data=[
        {
                id: "en-1",
                title: "school fee",
                amount: 250,
                date: today,
                dues:"paid"
              
        },
        {
            id: "en-2",
            title: " fee",
            amount: 50,
            date: today,
            dues:"unpaid"
          
    },
    

    ];
    return(
        <div>
           <Table
           title={data[0].title}
           fee={data[0].amount}
           today={data[0].date}
           dues={data[0].dues}
           /> 
           <Table
           title={data[1].title}
           fee={data[1].amount}
           today={data[1].date}
           dues={data[1].dues}
           /> 
           
        </div>
    );
}

export default App;