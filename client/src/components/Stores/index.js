import React from 'react';

export const Stores = (props) => (
	<div className="form-group">
		<label htmlFor="select">{props.name}</label>
		<select className="form-control" value={props.bobaStore} id="select" onChange={props.onChange} required="required">
			<option value=""></option>
			{props.stores.map((store, i) => {
				return <option key={i} value={store.name + ", " + store.address + ", " + store.city}>{store.name + ", " + store.address + ", " + store.city}</option>
			})}
		</select>
	</div>
);

export default Stores;