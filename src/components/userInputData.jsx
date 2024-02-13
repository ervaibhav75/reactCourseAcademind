export default function UserInputData({ onEdit }) {
    return (
      <div id="user-input">
        <form>
          <div className="input-group">
            <div>
              <label htmlFor="input1">INITIAL INVESTMENT</label>
              <input
                type="number"
                id="input1"
                onChange={(event) => 
                    onEdit('initialInvestment',event.target.value )
                  }
                required
              />
  
              <label htmlFor="input2">EXPECTED RETURN</label>
              <input
                type="number"
                id="input2"
                onChange={(event) => 
                    onEdit('expectedReturn',event.target.value )
                  }
                required
              />
            </div>
  
            <div>
              <label htmlFor="input3">Annual Investment</label>
              <input
                type="number"
                id="input3"
                onChange={(event) => 
                  onEdit('annualInvestment',event.target.value )
                }
                required
              />
  
              <label htmlFor="input4">Duration</label>
              <input
                type="number"
                id="input4"
                onChange={(event) => 
                    onEdit('duration',event.target.value )
                  }
                required
              />
            </div>
          </div>
        </form>
      </div>
    );
  }