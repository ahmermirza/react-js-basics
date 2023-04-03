import React, { Component } from 'react';

class Counter extends Component {
   state = {
      // count: this.props.counter.value,
      tags: ['tag1', 'tag2', 'tag3']
   };

   styles = {
      // fontSize: 10,
      // fontWeight: 'bold'
   };

   // constructor() {
   //    super();
   //    this.handleIncrement = this.handleIncrement.bind(this);
   // }

   renderTags() {
      if (this.state.tags.length === 0) return <p>There are no tags!</p>;

      return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
   }

   render() {
      return (
         <React.Fragment>
            {/* {this.props.children} */}
            {this.props.counter.id}
            <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>Increment</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger btn-sm m-2'>Delete</button><br />
            {/* {this.state.tags.length === 0 && 'Please create new tags'}
            {this.renderTags()} */}
         </React.Fragment>
      );
   }

   getBadgeClasses() {
      let classes = 'badge m-2 badge-';
      classes += (this.props.counter.value === 0 ? 'warning' : 'primary');
      return classes;
   }

   formatCount() {
      const { value } = this.props.counter;
      return value === 0 ? 'Zero' : value;
   }
}

export default Counter;