import React, { Component } from 'react'
import { connect } from 'react-redux'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import moment from 'moment'
import normalizeUrl from 'normalize-url'
import Hostname from 'components/Hostname'
import StripEntities from 'components/StripEntities'
import Summary from 'components/Summary'
import Image from 'components/Image'

import Personalization from 'components/Personalization'
import Articles from 'containers/Home/components/Articles'

import * as FeedActions from 'actions/Feeds'
import * as PersonalizationActions from 'actions/Personalization'

@connect(state => ({ feeds: state.Feeds, sidebar: state.Sidebar, }))
class Home extends Component {

    trackEngagement = (id, index) => this.props.dispatch(
        FeedActions.engage(id, index)
    )

    componentWillMount() {
        this.props.dispatch(FeedActions.load())
    }

    componentWillReceiveProps(props) {
        const { dispatch } = this.props
        if (props.sidebar != this.props.sidebar && !props.sidebar) {
            dispatch(FeedActions.clear())
            dispatch(FeedActions.load())
        }
    }

    render() {

        if (!this.props.feeds.length) return null

        return (
            <div>
                <div className="container-fluid">
                    <div className="container-fluid masonry">
                        <div className="row row-1">
                            <div className="col-lg-3 col-md-12 col-sm-12">
                                <div className="b1">
                                    <h1>Feed Personalization</h1>
                                    <p>Winds is an open source RSS Reader that we built to showcase&nbsp;
                                    <a href="https://getstream.io/personalization/" target="_blank">Personalized Feeds</a>.</p>
                                    <p>We've written a technical deep dive on our blog:</p>
                                </div>
                                <div className="read-blog">
                                    <a href="http://bit.ly/personalization-winds" target="_blank" className="btn btn-outline-primary text-uppercase">HOW IT WORKS &rarr;</a>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 margin-btm" onClick={() => this.trackEngagement(this.props.feeds[0].object.id, 0)}>
                                <a href={this.props.feeds[0].object.articleUrl} target="_blank">
                                    <Image className="b2" src={this.props.feeds[0].object.imageSrc} />
                                </a>
                                <div className="meta">
                                    <h2>
                                        <a href={this.props.feeds[0].object.articleUrl} target="_blank">
                                            <StripEntities>{this.props.feeds[0].object.title}</StripEntities>
                                        </a>
                                    </h2>
                                    <p>
                                        {moment(this.props.feeds[0].object.createdAt).fromNow()}
                                        &nbsp;from&nbsp;
                                        <a href={normalizeUrl(this.props.feeds[0].object.articleUrl)} target="_blank">
                                            {this.props.feeds[0].site.name || this.props.feeds[0].site.siteUrl}
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12" onClick={() => this.trackEngagement(this.props.feeds[1].object.id, 1)}>
                                <a href={this.props.feeds[1].object.articleUrl} target="_blank">
                                    <Image className="b3" src={this.props.feeds[1].object.imageSrc} />
                                </a>
                                <div className="meta">
                                    <h3>
                                        <a href={this.props.feeds[1].object.articleUrl} target="_blank">
                                            <StripEntities>{this.props.feeds[1].object.title}</StripEntities>
                                        </a>
                                    </h3>
                                    <p>
                                        {moment(this.props.feeds[1].object.createdAt).fromNow()}
                                        &nbsp;from&nbsp;
                                        <a href={normalizeUrl(this.props.feeds[1].object.articleUrl)} target="_blank">
                                            {this.props.feeds[1].site.name || this.props.feeds[1].site.siteUrl}
                                        </a>
                                    </p>
                                    <Summary>{this.props.feeds[1].object.summary}</Summary>
                                </div>
                            </div>
                        </div>
                        <div className="row row-2">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12" onClick={() => this.trackEngagement(this.props.feeds[2].object.id, 2)}>
                                <a href={this.props.feeds[2].object.articleUrl} target="_blank">
                                    <Image className="b4" src={this.props.feeds[2].object.imageSrc} />
                                </a>
                                <div className="meta">
                                    <h2>
                                        <a href={this.props.feeds[2].object.articleUrl} target="_blank">
                                            <StripEntities>{this.props.feeds[2].object.title}</StripEntities>
                                        </a>
                                    </h2>
                                    <p>
                                    {moment(this.props.feeds[2].object.createdAt).fromNow()}
                                    &nbsp;from&nbsp;
                                    <a href={normalizeUrl(this.props.feeds[2].object.articleUrl)} target="_blank">
                                        {this.props.feeds[2].site.name || this.props.feeds[2].site.siteUrl}
                                    </a>
                                </p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12" onClick={() => this.trackEngagement(this.props.feeds[3].object.id, 3)}>
                                <a href={this.props.feeds[3].object.articleUrl} target="_blank">
                                    <Image className="b5" src={this.props.feeds[3].object.imageSrc} />
                                </a>
                                <div className="meta">
                                    <h2>
                                        <a href={this.props.feeds[3].object.articleUrl} target="_blank">
                                            <StripEntities>{this.props.feeds[3].object.title}</StripEntities>
                                        </a>
                                    </h2>
                                    <p>
                                    {moment(this.props.feeds[3].object.createdAt).fromNow()}
                                    &nbsp;from&nbsp;
                                    <a href={normalizeUrl(this.props.feeds[3].object.articleUrl)} target="_blank">
                                        {this.props.feeds[3].site.name || this.props.feeds[3].site.siteUrl}
                                    </a>
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="row row-3">
                            <div
                                className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12"
                                onClick={() => this.trackEngagement(this.props.feeds[4].object.id, 4)}>
                                <a href={this.props.feeds[4].object.articleUrl} target="_blank">
                                    <Image className="b7" src={this.props.feeds[4].object.imageSrc} />
                                </a>
                                <div className="meta">
                                    <h3>
                                        <a href={this.props.feeds[4].object.articleUrl} target="_blank">
                                            <StripEntities>{this.props.feeds[4].object.title}</StripEntities>
                                        </a>
                                    </h3>
                                    <p>
                                        {moment(this.props.feeds[4].object.createdAt).fromNow()}
                                        &nbsp;from&nbsp;
                                        <a href={normalizeUrl(this.props.feeds[4].object.articleUrl)} target="_blank">
                                            {this.props.feeds[4].site.name || this.props.feeds[4].site.siteUrl}
                                        </a>
                                    </p>
                                    <Summary>{this.props.feeds[4].object.summary}</Summary>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12" onClick={() => this.trackEngagement(this.props.feeds[5].object.id, 5)}>
                                    <a href={this.props.feeds[5].object.articleUrl} target="_blank">
                                        <Image className="b6" src={this.props.feeds[5].object.imageSrc} />
                                    </a>
                                    <div className="meta">
                                        <h2>
                                            <a href={this.props.feeds[5].object.articleUrl} target="_blank">
                                                <StripEntities>{this.props.feeds[5].object.title}</StripEntities>
                                            </a>
                                        </h2>
                                        <p>
                                            {moment(this.props.feeds[5].object.createdAt).fromNow()}
                                            &nbsp;from&nbsp;
                                            <a href={normalizeUrl(this.props.feeds[5].object.articleUrl)} target="_blank">
                                                {this.props.feeds[5].site.name || this.props.feeds[5].site.siteUrl}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12" onClick={() => this.trackEngagement(this.props.feeds[6].object.id, 6)}>
                                    <a href={this.props.feeds[6].object.articleUrl} target="_blank">
                                        <Image className="b8" src={this.props.feeds[6].object.imageSrc} />
                                    </a>
                                    <div className="meta">
                                    <h3>
                                        <a href={this.props.feeds[6].object.articleUrl} target="_blank">
                                            <StripEntities>{this.props.feeds[6].object.title}</StripEntities>
                                        </a>
                                    </h3>
                                    <p>
                                        {moment(this.props.feeds[6].object.createdAt).fromNow()}
                                        &nbsp;from&nbsp;
                                        <a href={normalizeUrl(this.props.feeds[6].object.articleUrl)} target="_blank">
                                            {this.props.feeds[6].site.name || this.props.feeds[6].site.siteUrl}
                                        </a>
                                    </p>
                                    <Summary>{this.props.feeds[6].object.summary}</Summary>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <Articles />
            </div>
        )
    }
}

require('./styles.scss')

export default Home
