'use client';

import EmailTemplateCopyButton from './EmailTemplateCopyButton';

const emailTemplateHTML = `<!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
<head>
	<title>IRIA 2026 Invitation - Phantom Healthcare</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@100;200;300;400;500;600;700;800;900" rel="stylesheet" type="text/css">
	<style>
		* { box-sizing: border-box; }
		body { margin: 0; padding: 0; background-color: #ffffff; }
		a[x-apple-data-detectors] { color: inherit !important; text-decoration: inherit !important; }
		#MessageViewBody a { color: inherit; text-decoration: none; }
		p { line-height: inherit }
		.desktop_hide, .desktop_hide table { mso-hide: all; display: none; max-height: 0px; overflow: hidden; }
		.image_block img+div { display: none; }
		sup, sub { font-size: 75%; line-height: 0; }
		@media (max-width:720px) {
			.desktop_hide table.icons-outer { display: inline-table !important; }
			.desktop_hide table.icons-inner, .social_block.desktop_hide .social-table { display: inline-block !important; }
			.icons-inner { text-align: center; }
			.icons-inner td { margin: 0 auto; }
			.mobile_hide { display: none; }
			.row-content { width: 100% !important; }
			.stack .column { width: 100%; display: block; }
			.mobile_hide { min-height: 0; max-height: 0; max-width: 0; overflow: hidden; font-size: 0px; }
			.desktop_hide, .desktop_hide table { display: table !important; max-height: none !important; }
			.row-3 .column-1 .block-1.paragraph_block td.pad>div, .row-3 .column-1 .block-2.paragraph_block td.pad>div, .row-3 .column-1 .block-3.paragraph_block td.pad>div { text-align: center !important; font-size: 16px !important; }
			.row-3 .column-1 .block-1.paragraph_block td.pad, .row-3 .column-1 .block-2.paragraph_block td.pad, .row-3 .column-1 .block-3.paragraph_block td.pad, .row-5 .column-1 .block-1.paragraph_block td.pad { padding: 10px !important; }
			.row-4 .column-1 .block-1.paragraph_block td.pad>div { text-align: left !important; font-size: 10px !important; }
			.row-4 .column-1 .block-1.paragraph_block td.pad { padding: 15px 0 15px 5px !important; }
			.row-6 .column-1 .block-2.paragraph_block td.pad>div, .row-6 .column-1 .block-3.paragraph_block td.pad>div, .row-6 .column-2 .block-2.paragraph_block td.pad>div, .row-6 .column-2 .block-3.paragraph_block td.pad>div, .row-6 .column-3 .block-2.paragraph_block td.pad>div, .row-6 .column-3 .block-3.paragraph_block td.pad>div { text-align: center !important; font-size: 11px !important; }
			.row-10 .column-1 .block-1.paragraph_block td.pad, .row-3 .column-1, .row-6 .column-1 .block-2.paragraph_block td.pad, .row-6 .column-1 .block-4.paragraph_block td.pad, .row-6 .column-1 .block-5.paragraph_block td.pad, .row-6 .column-2 .block-2.paragraph_block td.pad, .row-6 .column-2 .block-4.paragraph_block td.pad, .row-6 .column-2 .block-5.paragraph_block td.pad, .row-6 .column-3 .block-2.paragraph_block td.pad, .row-6 .column-3 .block-4.paragraph_block td.pad, .row-6 .column-3 .block-5.paragraph_block td.pad, .row-8 .column-1 .block-1.social_block td.pad, .row-9 .column-1 .block-1.icons_block td.pad, .row-9 .column-1 .block-2.paragraph_block td.pad, .row-9 .column-2 .block-2.paragraph_block td.pad, .row-9 .column-3 .block-2.paragraph_block td.pad { padding: 0 !important; }
			.row-5 .column-1 .block-1.paragraph_block td.pad>div { text-align: left !important; font-size: 16px !important; }
			.row-6 .column-1 .block-3.paragraph_block td.pad, .row-6 .column-2 .block-3.paragraph_block td.pad, .row-6 .column-3 .block-3.paragraph_block td.pad { padding: 5px 0 !important; }
			.row-6 .column-1 .block-4.paragraph_block td.pad>div, .row-6 .column-2 .block-4.paragraph_block td.pad>div, .row-6 .column-3 .block-4.paragraph_block td.pad>div { text-align: center !important; font-size: 9px !important; }
			.row-6 .column-1 .block-5.paragraph_block td.pad>div, .row-6 .column-2 .block-5.paragraph_block td.pad>div, .row-6 .column-3 .block-5.paragraph_block td.pad>div { text-align: center !important; font-size: 10px !important; }
			.row-9 .column-1 .block-1.icons_block .icons-inner a, .row-9 .column-1 .block-1.icons_block .icons-inner td, .row-9 .column-2 .block-1.icons_block .icons-inner a, .row-9 .column-2 .block-1.icons_block .icons-inner td, .row-9 .column-3 .block-1.icons_block .icons-inner a, .row-9 .column-3 .block-1.icons_block .icons-inner td { font-size: 8px !important; }
			.row-10 .column-1 .block-1.paragraph_block td.pad>div, .row-9 .column-1 .block-2.paragraph_block td.pad>div, .row-9 .column-2 .block-2.paragraph_block td.pad>div, .row-9 .column-3 .block-2.paragraph_block td.pad>div { text-align: center !important; font-size: 8px !important; }
			.row-4 .column-1 { padding: 5px !important; }
			.row-7 .column-1, .row-8 .column-1 { padding: 5px 0 0 !important; }
		}
	</style>
</head>
<body class="body" style="margin: 0; background-color: #ffffff; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	<table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto; background-color: #ffffff; background-image: none; background-position: top left; background-repeat: no-repeat;">
		<tbody>
			<tr>
				<td>
					<table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-left: 1px solid #000000; border-right: 1px solid #000000; border-top: 1px solid #000000; color: #000000; background-size: auto; border-bottom: 1px solid #000000; border-radius: 0; width: 700px; margin: 0 auto;" width="700">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;">
																<div class="alignment" align="center">
																	<div style="max-width: 698px;"><a href="https://api.whatsapp.com/send?phone=919899963601" target="_blank"><img src="https://5b58b4424f.imgdist.com/pub/bfra/f2uwhgvf/o1c/jtb/lzf/uploads_image_q3T9MfctvimWoDLnAaduIVx6krEbNR_INVITATION.gif" style="display: block; height: auto; border: 0; width: 100%;" width="698" alt="Invitation to IRIA 2026 (Hyderabad) by Phantom Healthcare" title="Invitation to IRIA 2026 (Hyderabad) by Phantom Healthcare" height="auto"></a></div>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-left: 1px solid #000000; border-right: 1px solid #000000; border-top: 1px solid #000000; color: #000000; background-size: auto; border-bottom: 1px solid #000000; border-radius: 0; width: 700px; margin: 0 auto;" width="700">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;">
																<div class="alignment" align="center">
																	<div style="max-width: 698px;"><a href="https://api.whatsapp.com/send?phone=919899963601" target="_blank"><img src="https://5b58b4424f.imgdist.com/pub/bfra/f2uwhgvf/ae3/wrd/53x/Inviation%20confrence%20PHPL%20email%20%281%29.png" style="display: block; height: auto; border: 0; width: 100%;" width="698" alt="Invitation to IRIA 2026 (Hyderabad) by Phantom Healthcare" title="Invitation to IRIA 2026 (Hyderabad) by Phantom Healthcare" height="auto"></a></div>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-left: 1px solid #000000; border-right: 1px solid #000000; border-top: 1px solid #000000; color: #000000; background-image: url('https://5b58b4424f.imgdist.com/pub/bfra/f2uwhgvf/l4k/1nt/hkk/%F0%9F%93%859th%20to%2012th%20February%202026%20%F0%9F%93%8DDubai%20Exhibition%20Centre%2099%2C%202020%20Boulevard%2C%20Madinat%20Al%20Mataar%2C%20Expo%20City%20Dubai%2C%20Dubai%2C%20%28U.A.E%29_1.png'); background-repeat: no-repeat; background-size: cover; border-radius: 0; width: 700px; margin: 0 auto;" width="700">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 60px; padding-top: 30px; vertical-align: top;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#000000;direction:ltr;font-family:'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:44px;font-weight:700;letter-spacing:0px;line-height:1.5;text-align:center;mso-line-height-alt:66px;">
																	<p style="margin: 0; margin-bottom: 5px;">📅 29<sup>th</sup> Jan to 1<sup>st</sup> Feb 2026</p>
																	<p style="margin: 0;">📍 HITEX, Hyderabad</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-left:10px;padding-right:10px;padding-top:15px;">
																<div style="color:#000000;direction:ltr;font-family:'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:33px;font-weight:500;letter-spacing:-1px;line-height:1.2;text-align:center;mso-line-height-alt:40px;">
																	<p style="margin: 0;">HITEX (Hyderabad International Convention and Exhibition Center)</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-left:10px;padding-right:10px;">
																<div style="color:#000000;direction:ltr;font-family:'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:24px;font-weight:500;letter-spacing:0px;line-height:1.2;text-align:center;mso-line-height-alt:29px;">
																	<p style="margin: 0; margin-bottom: 5px;"><a href="#" style="color:#000000;text-decoration:none;pointer-events:none;">Hitex Road, Izzathnagar, Kothaguda, Hyderabad,</a></p>
																	<p style="margin: 0;"><a href="#" style="color:#000000;text-decoration:none;pointer-events:none;">Telangana (500084), 🇮🇳-INDIA</a></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-left: 1px solid #000000; border-right: 1px solid #000000; border-top: 1px solid #000000; color: #000000; border-radius: 0; width: 700px; margin: 0 auto;" width="700">
										<tbody>
											<tr>
												<td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-bottom:20px;padding-left:30px;padding-top:15px;">
																<div style="color:#101112;direction:ltr;font-family:'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:17px;font-weight:700;letter-spacing:0px;line-height:1.5;text-align:left;mso-line-height-alt:26px;">
																	<p style="margin: 0; margin-bottom: 0px;">Call Us or</p>
																	<p style="margin: 0; margin-bottom: 0px;">Connect Via Mail,</p>
																	<p style="margin: 0;">Social Media & WhatsApp</p>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2" width="16.666666666666668%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-top:10px;width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<div style="max-width: 70px;"><a href="mailto:digital@phantomhealthcare.com?subject=Enquiry for radiology equipment products/services -via IRIA 2026 Hyderabad" target="_blank"><img src="https://5b58b4424f.imgdist.com/pub/bfra/f2uwhgvf/azm/1ag/ap0/Untitled%20design%20%285%29.png" style="display: block; height: auto; border: 0; width: 100%;" width="70" alt="Email Phantom Healthcare" title="Email Phantom Healthcare" height="auto"></a></div>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-3" width="16.666666666666668%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-top:10px;width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<div style="max-width: 70px;"><a href="https://api.whatsapp.com/send?phone=919899963601" target="_blank"><img src="https://5b58b4424f.imgdist.com/pub/bfra/f2uwhgvf/a6l/val/4ss/Untitled%20design%20%286%29.png" style="display: block; height: auto; border: 0; width: 100%;" width="70" alt="WhatsApp Phantom Healthcare" title="WhatsApp Phantom Healthcare" height="auto"></a></div>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-4" width="16.666666666666668%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-top:10px;width:100%;padding-right:0px;padding-left:0px;">
																<div class="alignment" align="center">
																	<div style="max-width: 70px;"><a href="tel:+919899963601" target="_blank"><img src="https://5b58b4424f.imgdist.com/pub/bfra/f2uwhgvf/uxj/yf7/pj6/Untitled%20design%20%287%29.png" style="display: block; height: auto; border: 0; width: 100%;" width="70" alt="Call Phantom Healthcare" title="Call Phantom Healthcare" height="auto"></a></div>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-left: 1px solid #000000; border-right: 1px solid #000000; border-top: 1px solid #000000; color: #000000; background-size: auto; border-bottom: 1px solid #000000; border-radius: 0; width: 700px; margin: 0 auto;" width="700">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: middle;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#000000;direction:ltr;font-family:'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:20px;font-weight:600;letter-spacing:0px;line-height:1.2;text-align:center;mso-line-height-alt:24px;">
																	<p style="margin: 0;">Our Registered Offices</p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto;">
						<tbody>
							<tr>
								<td>
									<table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-left: 1px solid #000000; border-right: 1px solid #000000; border-top: 1px solid #000000; color: #000000; background-size: auto; border-radius: 0; width: 700px; margin: 0 auto;" width="700">
										<tbody>
											<tr>
												<td class="column column-1" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; border-right: 1px dotted #000000; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:5px;padding-left:60px;padding-right:60px;width:100%;">
																<div class="alignment" align="center">
																	<div style="max-width: 70px;"><img src="https://5b58b4424f.imgdist.com/pub/bfra/f2uwhgvf/llr/anl/8m9/1.jpg" style="display: block; height: auto; border: 0; width: 100%;" width="70" alt="USA" title="USA" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#101112;direction:ltr;font-family:'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:13px;font-weight:400;letter-spacing:0px;line-height:1;text-align:center;mso-line-height-alt:13px;">
																	<p style="margin: 0;">USA and West</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="5" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#101112;direction:ltr;font-family:'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;font-weight:600;letter-spacing:0px;line-height:1;text-align:center;mso-line-height-alt:12px;">
																	<p style="margin: 0;">Phantom Healthcare US LLC</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#101112;direction:ltr;font-family:'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;font-weight:400;letter-spacing:0px;line-height:1.1;text-align:center;mso-line-height-alt:13px;">
																	<p style="margin: 0;">Chicago</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-left:5px;padding-right:5px;">
																<div style="color:#101112;direction:ltr;font-family:'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;font-weight:600;letter-spacing:0px;line-height:1.5;text-align:center;mso-line-height-alt:18px;">
																	<p style="margin: 0;"><a target="_blank" href="tel:+16307206801" rel="noopener" style="text-decoration: none; color: #000000;">+16307206801</a> <a href="tel:+919899963601" target="_blank" rel="noopener" style="text-decoration: none; color: #000000;">+919899963601</a></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; border-right: 1px dotted #000000; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:5px;padding-left:60px;padding-right:60px;width:100%;">
																<div class="alignment" align="center">
																	<div style="max-width: 70px;"><img src="https://5b58b4424f.imgdist.com/pub/bfra/f2uwhgvf/e2m/3cz/dcz/3.jpg" style="display: block; height: auto; border: 0; width: 100%;" width="70" alt="UAE" title="UAE" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#101112;direction:ltr;font-family:'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:13px;font-weight:400;letter-spacing:0px;line-height:1;text-align:center;mso-line-height-alt:13px;">
																	<p style="margin: 0;">Middle-East, Gulf & Africa</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="5" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#101112;direction:ltr;font-family:'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;font-weight:600;letter-spacing:0px;line-height:1;text-align:center;mso-line-height-alt:12px;">
																	<p style="margin: 0;">Phantom Healthcare AE FZC</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#101112;direction:ltr;font-family:'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;font-weight:400;letter-spacing:0px;line-height:1.1;text-align:center;mso-line-height-alt:13px;">
																	<p style="margin: 0;">Sharjah(Dubai)</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#101112;direction:ltr;font-family:'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;font-weight:600;letter-spacing:0px;line-height:1.5;text-align:center;mso-line-height-alt:18px;">
																	<p style="margin: 0;"><a target="_blank" href="tel:+971522208819" rel="noopener" style="text-decoration: none; color: #000000;">+971522208819</a></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-3" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:5px;padding-left:60px;padding-right:60px;width:100%;">
																<div class="alignment" align="center">
																	<div style="max-width: 70px;"><img src="https://5b58b4424f.imgdist.com/pub/bfra/f2uwhgvf/5ou/up9/vla/2.jpg" style="display: block; height: auto; border: 0; width: 100%;" width="70" alt="India" title="India" height="auto"></div>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#101112;direction:ltr;font-family:'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:13px;font-weight:400;letter-spacing:0px;line-height:1;text-align:center;mso-line-height-alt:13px;">
																	<p style="margin: 0;">India & South-East Asia</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="5" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#101112;direction:ltr;font-family:'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;font-weight:600;letter-spacing:0px;line-height:1;text-align:center;mso-line-height-alt:12px;">
																	<p style="margin: 0;">Phantom Healthcare IND Pvt Ltd</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#101112;direction:ltr;font-family:'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;font-weight:400;letter-spacing:0px;line-height:1.1;text-align:center;mso-line-height-alt:13px;">
																	<p style="margin: 0;">1.Faridabad(Delhi-NCR) 2.Pune</p>
																</div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#101112;direction:ltr;font-family:'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;font-weight:600;letter-spacing:0px;line-height:1.5;text-align:center;mso-line-height-alt:18px;">
																	<p style="margin: 0;"><a target="_blank" href="tel:+919899963601" rel="noopener" style="text-decoration: none; color: #000000;">+919899963601</a> <a href="tel:+911294312423" target="_blank" rel="noopener" style="text-decoration: none; color: #000000;">+911294312423</a></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-left: 1px solid #000000; border-right: 1px solid #000000; border-top: 1px solid #000000; color: #000000; width: 700px; margin: 0 auto;" width="700">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 5px; padding-right: 5px; padding-top: 5px; vertical-align: top;">
													<table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-left:10px;padding-right:10px;text-align:center;width:100%;">
																<h1 style="margin: 0; color: #303030; direction: ltr; font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 25px; font-weight: 700; letter-spacing: normal; line-height: 1.2; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 30px;"><a href="https://phantomhealthcare.com/" target="_blank" style="text-decoration: none; color: #303030;">www.phantomhealthcare.com</a></h1>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-8" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-left: 1px solid #000000; border-right: 1px solid #000000; border-top: 1px solid #000000; color: #000000; width: 700px; margin: 0 auto;" width="700">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-left: 5px; padding-right: 5px; padding-top: 5px; vertical-align: top;">
													<table class="social_block block-1" width="100%" border="0" cellpadding="5" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div class="alignment" align="center">
																	<table class="social-table" width="468px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;">
																		<tr>
																			<td style="padding:0 10px 0 10px;"><a href="https://phantomhealthcare.com/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/colored/website@2x.png" width="32" height="auto" alt="Website" title="Website" style="display: block; height: auto; border: 0;"></a></td>
																			<td style="padding:0 10px 0 10px;"><a href="https://www.facebook.com/phantom.healthcare.ind" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/colored/facebook@2x.png" width="32" height="auto" alt="Facebook" title="Facebook" style="display: block; height: auto; border: 0;"></a></td>
																			<td style="padding:0 10px 0 10px;"><a href="https://x.com/Phantomhealthc" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/colored/twitter@2x.png" width="32" height="auto" alt="Twitter" title="Twitter" style="display: block; height: auto; border: 0;"></a></td>
																			<td style="padding:0 10px 0 10px;"><a href="https://in.linkedin.com/company/phantom-healthcare-ind-private-limited-company" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/colored/linkedin@2x.png" width="32" height="auto" alt="LinkedIn" title="LinkedIn" style="display: block; height: auto; border: 0;"></a></td>
																			<td style="padding:0 10px 0 10px;"><a href="https://www.instagram.com/phantomhealthcare/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/colored/instagram@2x.png" width="32" height="auto" alt="Instagram" title="Instagram" style="display: block; height: auto; border: 0;"></a></td>
																			<td style="padding:0 10px 0 10px;"><a href="https://www.youtube.com/@phantomhealthcare" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/colored/youtube@2x.png" width="32" height="auto" alt="YouTube" title="YouTube" style="display: block; height: auto; border: 0;"></a></td>
																			<td style="padding:0 10px 0 10px;"><a href="https://www.pinterest.com/phantomhealthcare/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/colored/pinterest@2x.png" width="32" height="auto" alt="Pinterest" title="Pinterest" style="display: block; height: auto; border: 0;"></a></td>
																			<td style="padding:0 10px 0 10px;"><a href="https://www.snapchat.com/@phantomhealth" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/colored/snapchat@2x.png" width="32" height="auto" alt="Snapchat" title="Snapchat" style="display: block; height: auto; border: 0;"></a></td>
																			<td style="padding:0 10px 0 10px;"><a href="https://www.threads.com/@phantomhealthcare" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/colored/threads@2x.png" width="32" height="auto" alt="Threads" title="Threads" style="display: block; height: auto; border: 0;"></a></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-9" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-left: 1px solid #000000; border-right: 1px solid #000000; border-top: 1px solid #000000; color: #000000; border-radius: 0; width: 700px; margin: 0 auto;" width="700">
										<tbody>
											<tr>
												<td class="column column-1" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: center; line-height: 0;">
														<tr>
															<td class="pad" style="vertical-align: middle; color: #000000; font-family: inherit; font-size: 14px; font-weight: 400; text-align: center;">
																<table class="icons-outer" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-table;">
																	<tr>
																		<td style="vertical-align: middle; text-align: center; padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px;"><a href="https://phantomhealthcare.com/" target="_blank" style="text-decoration: none;"><img class="icon" src="https://5b58b4424f.imgdist.com/pub/bfra/f2uwhgvf/fxz/2yv/za1/Untitled%20design%20%288%29.png" alt="Website" height="auto" width="16" align="center" style="display: block; height: auto; margin: 0 auto; border: 0;"></a></td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#3d5569;direction:ltr;font-family:'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:10px;font-weight:400;letter-spacing:0px;line-height:1.2;text-align:center;mso-line-height-alt:12px;">
																	<p style="margin: 0;"><a href="https://phantomhealthcare.com/" target="_blank" style="text-decoration: none; color: #3d5569;">Visit Our Website</a></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-2" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: center; line-height: 0;">
														<tr>
															<td class="pad" style="vertical-align: middle; color: #000000; font-family: inherit; font-size: 14px; font-weight: 400; text-align: center;">
																<table class="icons-outer" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-table;">
																	<tr>
																		<td style="vertical-align: middle; text-align: center; padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px;"><a href="https://phantomhealthcare.com/privacy-policy.html" target="_self" style="text-decoration: none;"><img class="icon" src="https://5b58b4424f.imgdist.com/pub/bfra/f2uwhgvf/hzk/n8w/1z6/Untitled%20design%20%289%29.png" alt="Privacy" height="auto" width="16" align="center" style="display: block; height: auto; margin: 0 auto; border: 0;"></a></td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#3d5569;direction:ltr;font-family:'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:10px;font-weight:400;letter-spacing:0px;line-height:1.2;text-align:center;mso-line-height-alt:12px;">
																	<p style="margin: 0;"><a href="https://phantomhealthcare.com/privacy-policy.html" target="_blank" style="text-decoration: none; color: #3d5569;">Privacy Policy</a></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
												<td class="column column-3" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top;">
													<table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: center; line-height: 0;">
														<tr>
															<td class="pad" style="vertical-align: middle; color: #000000; font-family: inherit; font-size: 14px; font-weight: 400; text-align: center;">
																<table class="icons-outer" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-table;">
																	<tr>
																		<td style="vertical-align: middle; text-align: center; padding-top: 0px; padding-bottom: 0px; padding-left: 0px; padding-right: 0px;"><a href="https://phantomhealthcare.com/terms-and-conditions.html" target="_self" style="text-decoration: none;"><img class="icon" src="https://5b58b4424f.imgdist.com/pub/bfra/f2uwhgvf/1hj/fa3/w8u/Untitled%20design%20%2810%29.png" alt="Terms" height="auto" width="16" align="center" style="display: block; height: auto; margin: 0 auto; border: 0;"></a></td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#3d5569;direction:ltr;font-family:'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:10px;font-weight:400;letter-spacing:0px;line-height:1.2;text-align:center;mso-line-height-alt:12px;">
																	<p style="margin: 0;"><a href="https://phantomhealthcare.com/terms-and-conditions.html" target="_blank" style="text-decoration: none; color: #3d5569;">Terms & Conditions</a></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-10" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-left: 1px solid #000000; border-right: 1px solid #000000; border-top: 1px solid #000000; color: #000000; border-bottom: 1px solid #000000; border-radius: 0; padding-bottom: 5px; width: 700px; margin: 0 auto;" width="700">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top;">
													<table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																<div style="color:#3d5569;direction:ltr;font-family:'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:8px;font-weight:400;letter-spacing:0px;line-height:1.2;text-align:center;mso-line-height-alt:10px;">
																	<p style="margin: 0;">You are receiving this email because you have visited our site or connected to our promotional network to receive the regular newsletter and promotional content. Make sure our messages get to your Inbox (and not your bulk or junk folders).<br><a href="http://www.phantomhealthcare.com/privacy-policy/" target="_blank" style="text-decoration: underline; color: #3d5569;">Privacy policy</a>&nbsp;|&nbsp;<a target="_blank" href="https://phantomhealthcare.com/privacy-policy.html" style="text-decoration: underline; color: #3d5569;">Unsubscribe</a></p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table>
</body>
</html>`;

export default function IRIAEmailTemplateEmbed() {
  return (
    <div className="my-8">
      {/* Mobile Notice - Hidden on Desktop */}
      <div
        className="block md:hidden my-8 p-6 border-2 border-dashed rounded-xl text-center bg-amber-100 dark:bg-amber-900/30 border-amber-500 dark:border-amber-600"
      >
        <div className="text-4xl mb-3">🖥️</div>
        <p className="font-bold text-lg mb-2">Desktop Only Feature</p>
        <p className="text-sm">
          The embedded email template preview and copy functionality is only available on <strong>Desktop devices</strong>.
        </p>
        <p className="text-sm mt-2">
          Please open this page in <strong>Google Chrome on a Desktop/Laptop</strong> to view and copy the email template.
        </p>
      </div>

      {/* Desktop Content - Hidden on Mobile */}
      <div className="hidden md:block">
        {/* Copy Button - Top */}
        <EmailTemplateCopyButton position="top" />

        {/* Email Template Embed - Theme Independent */}
        <div
          className="my-6 rounded-lg overflow-hidden shadow-2xl"
          style={{
            backgroundColor: '#ffffff',
            padding: '0',
            border: '2px solid #e5e7eb',
            isolation: 'isolate'
          }}
        >
          <iframe
            id="email-template-iframe"
            srcDoc={emailTemplateHTML}
            style={{
              width: '100%',
              height: '1800px',
              border: 'none',
              backgroundColor: '#ffffff'
            }}
            title="IRIA 2026 Email Template Preview"
          />
        </div>

        {/* Copy Button - Bottom */}
        <EmailTemplateCopyButton position="bottom" />

        {/* Fallback Notice */}
        <div
          className="my-8 p-4 border-l-4 rounded-r-lg bg-orange-50 dark:bg-orange-900/30 border-orange-500 dark:border-orange-400"
        >
          <p className="font-bold mb-2">⚠️ Copy Button Not Working?</p>
          <p className="text-sm">
            The copy button may not work in all browsers. If it doesn&apos;t copy properly:
          </p>
          <ol className="text-sm list-decimal ml-4 mt-2 space-y-1">
            <li><strong>Manual Selection:</strong> Use your mouse to select the email content inside the preview above, then Ctrl+C to copy</li>
            <li>Or request the template email directly from your manager</li>
            <li>The copy button works best in Chrome Desktop</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
