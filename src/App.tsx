import * as React from 'react';
import {PrimaryButton} from 'office-ui-fabric-react/lib/Button';
import {Dropdown, IDropdownOption} from 'office-ui-fabric-react/lib/Dropdown';


import './App.css';

declare var appMeldsettings: any;


class App extends React.Component<{},{selectedArea:{key:string|number},selectedProject:{key:string|number}}> {
  
 
  constructor(props: {}){
    super(props);
    this.state = {
      selectedArea: {key:''},
      selectedProject: {key:''}
    };
  }

  public areaChange = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void => {
    this.setState({selectedArea:item});
  }

  public projectChange = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void => {
    this.setState({selectedProject:item});
  }

  public render() {
    const buttonActive = this.checkJumpButton();

    return (
      <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm4">
          <Dropdown
          label={appMeldsettings.translations.active.area_label}
          ariaLabel={appMeldsettings.translations.active.area_label}
          onChange={this.areaChange}        
          placeholder={appMeldsettings.translations.active.area_placeholder}
          options={appMeldsettings.areaOptions}
          />        
        </div>
        <div className="ms-Grid-col ms-sm4">
          <Dropdown
          label={appMeldsettings.translations.active.project_label}
          ariaLabel={appMeldsettings.translations.active.project_label}
          placeholder={appMeldsettings.translations.active.project_placeholder}
          onChange={this.projectChange}
          disabled={(this.checkArea()) ? false : true}
          options={appMeldsettings.projectOptions}
          />        
        </div>
        <div className="ms-Grid-col ms-sm4 app-meld-button-wrapper">
          <PrimaryButton 
            text={appMeldsettings.translations.active.go_button}
            disabled={buttonActive}
            onClick={this.jumpToDestination}
          />        
        </div>                
      </div>
        </div>        

    );
  }

 

  private jumpToDestination = (): void => {
    let hrefToJump = "/websites/meld/DokumenteProd/Forms/AllItems.aspx";    
    const selectedArea = this.state.selectedArea.key;
    const selectedProject = this.state.selectedProject.key;
    const spRootFolderInfo = "?RootFolder=%2Fwebsites%2Fmeld%2FDokumenteProd%2F";    

    if(this.checkArea()){
      hrefToJump = selectedProject+spRootFolderInfo+selectedArea;
    }

    // console.log(hrefToJump);
    window.location.href = hrefToJump;
  }

  private checkArea = (): boolean => {
    let toReturn = true;
    const selectedArea = this.state.selectedArea.key;

    if(selectedArea === "ALL" || selectedArea === ""){
      toReturn = false;
    }

    return toReturn;
  }

  private checkProject = (): boolean => {
    let toReturn = true;
    const selectedProject = this.state.selectedProject.key;

    if(selectedProject === ""){
      toReturn = false;
    }

    return toReturn;
  }  

  private checkJumpButton = (): boolean => {
    let toReturn = true;

    if(this.state.selectedArea.key === 'ALL' || (this.state.selectedArea.key !== 'ALL' && this.checkProject())){
      toReturn = false;
    }

    return toReturn;
  } 
  

}

export default App;
