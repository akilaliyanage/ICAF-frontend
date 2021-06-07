import React , {Component} from 'react'
import {Stepper , StepLabel , Step, makeStyles} from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import PropTypes from 'prop-types'
import clsx from 'clsx'

class StepperSection extends Component{
    constructor(props){
        super(props);
        this.state = {

        }

        this.labelList = this.labelList.bind(this);
        this.renderIcons = this.renderIcons.bind(this);
        this.ColorlibStepIcon = this.ColorlibStepIcon.bind(this);
    }

    ColorlibConnector = withStyles({
        alternativeLabel: {
            top: 22,
        },
        active: {
            '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
            },
        },
        completed: {
            '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
            },
        },
        line: {
            height: 3,
            border: 0,
            backgroundColor: '#eaeaf0',
            borderRadius: 1,
        },
    })(StepConnector);

    useColorlibStepIconStyles = makeStyles({
        root: {
            backgroundColor: '#ccc',
            zIndex: 1,
            color: '#fff',
            width: 50,
            height: 50,
            display: 'flex',
            borderRadius: '50%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        active: {
            backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
            boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
        },
        completed: {
            backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        },
    });

     ColorlibStepIcon(props) {
        const classes = useColorlibStepIconStyles();
        const { active, completed } = props;

        const icons = {
            1: <SettingsIcon />,
            2: <GroupAddIcon />,
            3: <VideoLabelIcon />,
        };

        return (
            <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
            >
            {icons[String(props.icon)]}
            </div>
        );
    }

    // ColorlibStepIcon.propTypes = {
    //     /**
    //      * Whether this step is active.
    //      */
    //     active: PropTypes.bool,
    //     /**
    //      * Mark the step as completed. Is passed to child components.
    //      */
    //     completed: PropTypes.bool,
    //     /**
    //      * The label displayed in the step icon.
    //      */
    //     icon: PropTypes.node,
    // };

    IconStyles = makeStyles({
        basic : {
            backgroundColor: '#ccc',
            zIndex: 1,
            color: '#fff',
            width: 50,
            height: 50,
            display: 'flex',
            borderRadius: '50%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        current : {
            backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
            boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
        },
        finished : {
            backgroundImage:
                'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        },
    })

    labelList(){
        return ['General Research Paper Details' , 'Upload General Research Paper' , 'Declaration']
    }

    renderIcons(props){

    }

    render(){
        return (
            <React.Fragment>
                <Stepper orientation="horizontal" activeStep="1" alternativeLabel>
                    {this.labelList().map((title) =>
                        (
                            <Step key={title}>
                                <StepLabel > {title} </StepLabel>
                            </Step>
                        )
                    )}
                </Stepper>
            </React.Fragment>
        )
    }
}

export default StepperSection