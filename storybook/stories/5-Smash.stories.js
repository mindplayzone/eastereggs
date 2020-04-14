import React from 'react';
import { Smash } from '../components/smash';
import { Egg } from '../components/egg';

export default {
  title: 'Smash',
  component: Smash,
};

export const DefaultSmash = () => (
	<Smash>
		<Egg color={ 'navy' } />
		<Egg color={ 'red' }/>
	</Smash>
);
