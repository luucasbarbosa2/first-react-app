import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class SubmitButton extends Component{


        render(){
                return(
                        <Button type="submit" variant="contained" disabled = {this.props.disabled} color={this.props.color}> {this.props.text} </Button>

                )
        }

}





export {SubmitButton}