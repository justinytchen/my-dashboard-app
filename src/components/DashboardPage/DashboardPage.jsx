import React, {Component} from 'react';
import DashboardCanvas from './DashboardCanvas';
import DashboardNav from './DashboardNav';
import { connect } from 'react-redux'

class DashboardPage extends Component{
    render(){
        return (
            <div className="dashboard-viewer">
                <DashboardNav />
                <DashboardCanvas />
            </div>
        );
    }
}

const mapStateToProps = state => ({
  widgets: state.widgets
})


export default connect(
  mapStateToProps
)(DashboardPage)