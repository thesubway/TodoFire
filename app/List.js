var React = require('react');

var myList = React.createClass ({
	render: function() {
		var styles = {
		  uList: {
		    paddingLeft: 0,
		    listStyleType: "none"
		  },
		  listGroup: {
		    margin: '5px 0',
		    borderRadius: 5
		  },
		  removeItem: {
		    fontSize: 20,
		    float: "left",
		    position: "absolute",
		    top: 12,
		    left: 6,
		    cursor: "pointer",
		    color: "rgb(222, 79, 79)"
		  },
		  todoItem: {
		    paddingLeft: 20,
		    fontSize: 17
		  }
		};
		var listItems = {
			return {
				this.props.items
			}
			<li>
			<input key={index}
			className="list-group-item"
			style={styles.listGroup}
			>
			// span is a component
			<span>
				<input className="glyphicon glyphicon-remove"
				style={styles.removeItem}
				onClick.function ({
					this.props.remove.bind(null,index)
				})
				>
			</span>
			</li>

		}
	}

})