import * as React from 'react';
import {PrimaryButton} from 'office-ui-fabric-react/lib/Button';
import {Dropdown, IDropdownOption} from 'office-ui-fabric-react/lib/Dropdown';

import './App.css';

class App extends React.Component<{},{selectedArea:{key:string|number},selectedProject:{key:string|number}}> {

  constructor(props: {}){
    super(props);
    this.state = {
      selectedArea: {key:''},
      selectedProject: {key:''}
    };
  }

  public areaChange = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void => {
    console.log('areaChange => '+item.key);
    this.setState({selectedArea:item});
  }

  public projectChange = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void => {
    console.log('projectChange => '+item.key);
    this.setState({selectedProject:item});
  }

  public render() {

    return (
      <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm4">
          <Dropdown
          label="Bereich auswählen"
          ariaLabel="Bereich auswählen"
          onChange={this.areaChange}        
          placeholder="Wähle einen Bereich"
          options={[
            {"key":"ALL", "text":"Alle"},
            {"key":"ZEN", "text":"GDA ZEN"},
            {"key":"BGB", "text":"GDA BGB"},
            {"key":"BGN", "text":"GDA BGN"},
            {"key":"RCI", "text":"GDA RCI"}
          ]}
          />        
        </div>
        <div className="ms-Grid-col ms-sm4">
          <Dropdown
          label="Projekt auswählen"
          ariaLabel="Projekt auswählen"
          placeholder="Wähle einen Projekt"
          onChange={this.projectChange}
          disabled={(this.state.selectedArea.key === "ALL" || this.state.selectedArea.key === "") ? true : false}
          options={[
            {"key":"1", "text":"AT"},
            {"key":"2", "text":"DS"},
            {"key":"3", "text":"EA"},
            {"key":"4", "text":"LW"},
            {"key":"5", "text":"MB"},
            {"key":"6", "text":"SE"},
            {"key":"7", "text":"ST"},
            {"key":"8", "text":"TA"},
            {"key":"9", "text":"TT"},
            {"key":"10", "text":"ZW"}          
          ]}
          />        
        </div>
        <div className="ms-Grid-col ms-sm4 app-meld-button-wrapper">
          <PrimaryButton 
            text="Los"
            onClick={this.jumpToDestination}
          />        
        </div>                
      </div>
        </div>        

    );
  }

  private jumpToDestination = (): void => {
    let hrefToJump = "https://www.example.com";

    if(this.state.selectedArea.key !== "ALL" && this.state.selectedArea.key !== ""){
      hrefToJump = "https://www.exmple.com/something/new"
    }

    console.log(hrefToJump);
    // window.location.href = hrefToJump;
  }    
}

export default App;
