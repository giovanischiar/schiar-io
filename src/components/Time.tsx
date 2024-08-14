import { Text, TextStyle } from 'react-native'
import { useState, useEffect } from 'react'

export function Time(props: { style: TextStyle }) {
	const [time, setTime] = useState(timeNow());

	useEffect(() => {
			setInterval(() => { setTime(timeNow()) }, 1000)
		}
	);
	
	return (
		<Text style={props.style}>{time}</Text>
	)
}

function timeNow(): String {
  return new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}
