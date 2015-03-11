var React = require('react');
var AddItem = React.createClass({
	getInitialState: function(){
		return{
			newItem: ''
		}
	},
	handleChange: function(e) {
		this.setState({
			newItem: e.target.value
		});
	},
	handleSubmit: function(e) {
		// check if key pressed is enter
		if (e.keyCode === 13) {
			this.props.add(this.state.newItem);
			//reset newItem to empty string.
			this.setState({
				newItem: ''
			})
		};
	},
	render: function() {
		return (
			<div>
				<input type="text"
				className="form-control"
				value={this.state.newItem}
				onKeyDown={this.handleSubmit}
				onChange={this.handleChange} />
			</div>
		)
	}
});
module.exports = AddItem;