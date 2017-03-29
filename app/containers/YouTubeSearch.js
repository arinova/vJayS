// /* eslint-disable */

// import React, {Component} from 'react';
// import Typeahead from 'react-typeahead-component2';
// import JSONP from 'jsonp';
// import OptionsTemplate from '../components/OptionsTemplate';
// import YoutubeFinder from 'youtube-finder';

// const googleAutoSuggestURL = '//suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=';

// class YoutubeAutocomplete extends Component {

//  constructor(props) {
//    super(props);
//    this.state = {
//      inputValue: ''
//    }
//  }

//  handleChange(event) {
//    const
//      self = this,
//      query = event.target.value,
//      url = googleAutoSuggestURL + query;

//    this.setState({
//      inputValue: url
//    });
    
//    console.log('QUERY: ',query)

//    JSONP(url, function(error, data){
//      if (query.includes('youtube.com/watch?v=') || query.includes('youtu.be/')) {
//        self.setState({
//          options: event.target.value
//        });
//      } else if (error) {
//        console.log(error);
//      } else {
//        const searchResults = data[1];
//        self.setState({
//          options: searchResults
//        });
//      }
//    });
//  }

//  onClick(event, optionData) {
//    const searchTerm = optionData[0];
//    this.setState({
//      inputValue: searchTerm
//    });
//  }

//  onOptionChange(event, optionData, index) {
//    const
//      self = this,
//      searchTerm  = optionData[0],
//      apiKey      = 'AIzaSyBOr-nJwESPXBlOSh-4-bf2R-ayOTUFVt4',
//      maxResults  = this.props.maxResults ? this.props.maxResults : '50';

//    this.setState({
//      inputValue: searchTerm
//    });
//  }

//  onDropDownClose(event) {
//    const
//      self          = this,
//      searchTerm    = this.state.inputValue,
//      maxResults    = this.props.maxResults <= 50 ? this.props.maxResults : '50',
//      YoutubeClient = YoutubeFinder.createClient({ key: this.props.apiKey }),
//        params        = {
//        part        : 'id,snippet',
//        type        : 'video',
//        q           : searchTerm,
//        maxResults  : 5,
//        videoEmbeddable: true,
//        safeSearch: 'none'
//      };
    
//    YoutubeClient.search(params, (error,results) => {
//      if(error) return console.log(error);
//      self.props.callback(results.items);
//      this.setState({
//        inputValue: ''
//      });
//    })
//  }

//  render() {
//    // React components using ES6 classes no longer autobind this to non React methods. In your constructor, add:
//    // this.onChange = this.onChange.bind(this)
//    // this is why you have to do onChange={this.handleChange.bind(this)}
//    return <div style={{width: '600px'}}>
//      <Typeahead
//        style={{width: '600px'}}
//        inputValue={this.state.inputValue}
//        placeholder={this.props.placeHolder}
//        className={this.props.className}
//        onChange={this.handleChange.bind(this)}
//        optionTemplate={OptionsTemplate}
//        options={this.state.options}
//        onOptionClick={this.onClick.bind(this)}
//        onOptionChange={this.onOptionChange.bind(this)}
//        onDropdownClose={this.onDropDownClose.bind(this)}
//      />
//    </div>
//  }
// }

// export default YoutubeAutocomplete;
