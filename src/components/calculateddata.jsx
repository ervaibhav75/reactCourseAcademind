import CustomTableRow from "./tableRow";

export default function CalculatedData({data}){
  
    return (
        <table id="result">
        <thead>
          <tr>

            <th>Year</th>
            <th>Investiment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital PA</th>

          </tr>
        </thead>
        <tbody>
         {data.map((singleEntry) => <CustomTableRow year={singleEntry.year} 
            investmentValue={singleEntry.valueEndOfYear} 
            interest={singleEntry.interest} totalInterest = {singleEntry.totalInterest}
            investedCapital={singleEntry.annualInvestment}  />)}
        </tbody>
        </table>
    )
}