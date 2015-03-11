var React = require('react');
var Firebase = require('firebase');
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

    this.firebaseRef.on('child_removed', function(snapshot){
      var key = snapshot.key();
      var newList = this.state.list.filter(function(item){
      return item.key !== key;
      });
      this.setState({
        list: newList
      });
    }.bind(this));
  },
  handleAddItem: function(newItem){
    this.firebaseRef.push(newItem);
  },
  handleRemoveItem: function(index){
    var item = this.state.list[index];
    this.firebaseRef.child(item.key).remove();
  },
  render: function(){
    return (
      <div className="col-sm-6 col-md-offset-3">
        <div className="col-sm-12">
          <h3 className="text-center"> Todo List </h3>
          <AddItem add={this.handleAddItem}/>
          <List items={this.state.list.map(function(item){return item.val})} remove={this.handleRemoveItem}/>
        </div>
      </div>
    )
  }
});

module.exports = ListContainer;