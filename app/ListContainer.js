var React = require('react');
var AddItem = require('./AddItem');
var List = require('./List');

var ListContainer = React.createClass({
  getInitialState: function(){
    return {
      list: []
    }
  },
  componentDidMount: function(){
    this.firebaseRef = new Firebase("https://todo-fire1.firebaseio.com/");
    this.firebaseRef.on('child_added', function(snapshot){
      this.setState({
        list: this.state.list.concat([{key: snapshot.key(), val: snapshot.val()}])
      })
    }.bind(this));
    this.firebaseRef.on('child_removed',function(snapshot){
      var key = snapshot.key();
      var newList = this.state.list.filter(function(item){
          return item.key !== key;
      });
    })
  },
  handleAddItem: function(newItem){
    this.setState({
      list: this.state.list.concat([newItem])
    });
  },
  handleRemoveItem: function(index){
    var newList = this.state.list;
    newList.splice(index, 1);
    this.setState({
      list: newList
    })
  },
  render: function(){
    return (
      <div className="col-sm-6 col-md-offset-3">
        <div className="col-sm-12">
          <h3 className="text-center"> Todo List </h3>
          <AddItem add={this.handleAddItem}/>
          <List items={this.state.list} remove={this.handleRemoveItem}/>
        </div>
      </div>
    )
  }
});

module.exports = ListContainer;