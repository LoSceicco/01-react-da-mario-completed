import Button from './Button';

const Title = (props) => {
    const showButton = !!props.showButton;
    return (
        <h2 className="title">{props.titleText}
            {showButton &&
            <Button className="title-btn" onClick={props.buttonHandler}>
                {props.buttonText}
            </Button>}
        </h2>
    )
}

export default Title;