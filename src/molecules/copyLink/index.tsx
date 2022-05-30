import { Body, margins, truncateText } from '../..';
import Copy from '../../assets/svg/copy.svg';
import Check from '../../assets/svg/check.svg';
import { useState } from 'react';

type Props = {
	url: string;
	maxLen?: number;
};

export const CopyLink = ({ url, maxLen }: Props) => {
	const [check, setCheck] = useState(false);

	const handleCopy = async () => {
		try {
			setCheck(true);
			await navigator.clipboard.writeText(url);
			setTimeout(() => {
				setCheck(false);
			}, 500);
		} catch (err) {
			alert('unable to copy text to clipboard');
		}
	};

	return (
		<div className="inline-flex flex-row border-b-2 justify-between items-center">
			<Body style={margins.mr8}>{truncateText(url, maxLen || 40)}</Body>
			{!check ? (
				<Copy className="cursor-pointer" onClick={handleCopy} />
			) : (
				<Check />
			)}
		</div>
	);
};
