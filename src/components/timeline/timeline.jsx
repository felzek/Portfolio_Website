import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import './timeline.css';

class TimelineComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
          expanded1: false,
          expanded2: false,
          expanded3: false
        };
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    handleExpandChange = (expanded1) => {
      this.setState({expanded1: expanded1});
    };

    handleExpandChange2 = (expanded2) => {
      this.setState({expanded2: expanded2});
    };

    handleExpandChange3 = (expanded3) => {
      this.setState({expanded3: expanded3});
    };

    handleExpand = () => {
      this.setState({expanded: true});
    };

    handleExpand2 = () => {
      this.setState({expanded2: true});
    };

    handleExpand3 = () => {
      this.setState({expanded3: true});
    };

    handleReduce = () => {
      this.setState({expanded1: false});
    };

    handleReduce2 = () => {
      this.setState({expanded2: false});
    };

    handleReduce3 = () => {
      this.setState({expanded3: false});
    };
    render() {
        return (
            <div className="timeline">
              <p className="headline">Working experience</p>
                <div className="timeline-entry">
                  <Card>
                      <CardHeader title="Email Marketing" subtitle="Concierge Auctions"/>
                      <CardText expandable={true}>
                          November	2016 - Present. Concierge Auctions, Email Marketing.
                          <br/><br/>
                            <div className="timeline-entries">
                              <div className="timeline-entry-chip">
                                <Chip>Email Marketing</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Docker</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Jenkins</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>LESS</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Java Spring</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Foundation, Bootstrap</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Confluence, JIRA</Chip>
                              </div>
                            </div>
                      </CardText>
                  </Card>
                </div>
                  <div className="timeline-entry">
                    <Card expanded={this.state.expanded1} onExpandChange={this.handleExpandChange}>
                        <CardHeader title="Digital Marketing Director" subtitle="Arbuba LLC"
                          actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            <li>In charged of launching digital and social media promotional campaign </li><br></br>
                            <li>Established the tools and procedure for posting on social media platforms</li><br></br>
                            <li>Improved impression by over 450% on major social media platforms </li><br></br>
<li>Set weekly goals and work procedures for the social media and web design teams and Overseer daily process to ensure the quality of the contents</li><br></br>
<li>Increased overall active User by 65% at the end of the job</li> 
                            <br/><br/>
                              <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                  <Chip>Angular 2</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Docker</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Jenkins</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>LESS</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Java Spring</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Foundation, Bootstrap</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Confluence, JIRA</Chip>
                                </div>
                              </div>
                        </CardText>
                    </Card>
                  </div>
                  <div className="timeline-entry">
                  <Card expanded={this.state.expanded2} onExpandChange={this.handleExpandChange2}>
                      <CardHeader title="Student" subtitle="Testo	SE	&	Co.	KGaA"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          October 2013 - September 2016. Bachelor of Science (Business Engineering), process automation and management, web and software development. Thesis: Integration of CRM and marketing automation with Hybris E-Commerce.

                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>BPMN</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>SharePoint</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Nintex</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Marketo</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Microsoft Dynamics</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Hybris</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>First Spirit</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
                <div className="timeline-entry">
                  <Card expanded={this.state.expanded3} onExpandChange={this.handleExpandChange3}>
                      <CardHeader title="Trainee" subtitle="Testo	Instruments	(Shenzhen)	Co.	Ltd"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          January	2015	-	March	2015. Installation of a quality management system according to ISO 9001 for the subsidiary in Shenzhen.

                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>Confluence</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>ISO 9001</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>BPMN</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
            </div>
        );
    }
}

export default TimelineComponent;
