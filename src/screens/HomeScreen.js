import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Data from '../components/Data';
import datas from '../datas';

const HomeScreen = () => {
	const [dataRows, setDataRows] = useState(datas);

	const updateStatus = (status, id) => {
		setDataRows((dataRows) => {
			return dataRows.map((item) => {
				if (item._id === id) {
					return {
						...item,
						notification: status
					};
				}
				return item;
			});
		});
	};

	return (
		<>
			<Row>
				{dataRows.map((data) => (
					<Col sm={6}>
						<Data data={data} updateStatus={updateStatus} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default HomeScreen;
