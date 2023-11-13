import React from "react";
import Link from "next/link";
import { MdCancel } from "react-icons/md";

const Canceled = () => {
	return (
		<div className="success-wrapper">
			<div className="success">
				<p style={{ color: "red", fontSize: "40px" }}>
					<MdCancel />
				</p>
				<h2 style={{ textAlign: "center" }}>現在、ご注文を処理できませんでした。</h2>
				<p className="email-msg">もう一度クレジットカード情報を入力してみてください。</p>
				<p className="description">またはホームページに移動してください。</p>
				<Link href="/">
					<button type="button" width="300px" className="btn">
						ホームに戻る
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Canceled;
