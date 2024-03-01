import React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const styles = {
  paper: {
    position: 'absolute',
    top: 0,
    right: 0
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '10px'
  },
  button: {
    marginRight: '10px'
  }
};

class AuthButtons extends React.Component<{ loginButtonProps: any, registerButtonProps: any }> {
    render() {
        let {loginButtonProps, registerButtonProps} = this.props;
        return (
            <Paper sx={
                {
                    ...styles.paper,
                    backgroundColor: 'rgba(38,33,33,0.46)'
                }
            } elevation={1}>
                <div style={styles.buttonContainer}>
                    <Button variant="contained" color="primary"
                            style={styles.button} {...loginButtonProps}>Войти</Button>
                    <Button variant="contained" color="primary"
                            style={styles.button} {...registerButtonProps}>Зарегистрироваться</Button>
                </div>
            </Paper>
        );
    }
}

export default AuthButtons;
