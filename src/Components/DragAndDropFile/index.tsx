// DropFileInput.jsx
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ImageConfig } from './imageConfig';
import upload from "../../assets/image/upload.svg"

import "./style.css"
import Icon from '../Icon';

const DropFileInput = (props: any) => {

	const wrapperRef = useRef<any>(null);

	const [fileList, setFileList] = useState<any>([]);

	const onDragEnter = () => wrapperRef.current.classList.add('dragover');

	const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

	const onDrop = () => wrapperRef.current.classList.remove('dragover');

	const onFileDrop = (e: any) => {
		const newFile = e.target.files[0];
		if (newFile) {
			const updatedList = [...fileList, newFile];
			setFileList(updatedList);
			props.onFileChange(updatedList);
		}
	}

	const fileRemove = (file: any) => {
		const updatedList = [...fileList];
		updatedList.splice(fileList.indexOf(file), 1);
		setFileList(updatedList);
		props.onFileChange(updatedList);
	}

	return (
		<>
			<div
				ref={wrapperRef}
				className="drop-file-input"
				onDragEnter={onDragEnter}
				onDragLeave={onDragLeave}
				onDrop={onDrop}
			>
				<div className="drop-file-input__label">
					<img src={upload}
						alt="" />
					<p>Clique ou arraste o arquivo</p>
				</div>
				<input type="file" value="" onChange={onFileDrop} />
			</div>
			{
				fileList.length > 0 ? (
					<div className="drop-file-preview">
						<p className="drop-file-preview__title">
							Prontos para envio
						</p>
						{
							fileList.map((item: any, index: number) => (
								<div key={index} className="drop-file-preview__item">
									<img src={ImageConfig[item.type.split('/')[1]] ||
										ImageConfig['default']} alt="" />
									<div className="drop-file-preview__item__info">
										<p>{item.name}</p>
										<p>{item.size}B</p>
									</div>
									<span className="drop-file-preview__item__del"
										onClick={() => fileRemove(item)}>
										<Icon icon='pi pi-trash' />
									</span>
								</div>
							))
						}
					</div>
				) : null
			}
		</>
	);
}

DropFileInput.propTypes = {
	onFileChange: PropTypes.func
}

export default DropFileInput;
