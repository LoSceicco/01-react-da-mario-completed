import Button from './Button';

const SwitchMode = (props) => 
  <div className="switch-mode">
    <Button onClick={props.switchModeHandler}>
      {props.isEdit ? 'Torna al Menù' : 'Modifica'}
    </Button>
  </div>

export default SwitchMode;