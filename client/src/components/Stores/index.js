import React from 'react';

export const Stores = (props) => (
	<div class="form-group">
		<label for="select">Select A Store</label>
		<select className="form-control" value={props.store} id="select" onChange={props.onChange} required="required">
			<option value=""></option>
			{props.stores.map((store) => {
				return <option value={store.name + ", " + store.city}>{store.name + ", " + store.city}</option>
			})}
		</select>
	</div>
);

export default Stores;