---
id: domain
title: Domain and Networking Setup
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Domains and DNS Configuration

Organizing your domains and DNS settings is crucial for a seamless network experience. Below is a quick reference table with all our domains. Further down, you will find detailed DNS configurations for each domain organized in tabs.

### Domain List

Here's an overview of our domains:

| Domain          | URL                           |
|-----------------|-------------------------------|
| BrillianIdeas   | [brillianideas.com](https://brillianideas.com)   |
| BrillianQuiz    | [brillianquiz.com](https://brillianquiz.com)     |
| BrillianCRM     | [brilliancrm.com](https://brilliancrm.com)       |
| BrillianICM     | [brillianicm.com](https://brillianicm.com)       |
| IMBIT-N3xt      | [imbit-n3xt.com](https://imbit-n3xt.com)         |

### DNS Settings by Domain

Expand the tabs below to view DNS settings for each domain:

<Tabs
  defaultValue="brillianideas"
  values={[
    { label: 'BrillianIdeas', value: 'brillianideas' },
    { label: 'BrillianQuiz', value: 'brillianquiz' },
    { label: 'BrillianCRM', value: 'brilliancrm' },
    { label: 'BrillianICM', value: 'brillianicm' },
    { label: 'IMBIT-N3xt', value: 'imbit-n3xt' },
  ]}>

<TabItem value="brillianideas">

| Name                                                             | Type  | Alias | Value                                               | Notes                                        |
|------------------------------------------------------------------|-------|-------|-----------------------------------------------------|----------------------------------------------|
| brillianideas.com                                                | A     | Yes   | d1py45h4yu2kpc.cloudfront.net.                      | Maps domain to the IP of the CloudFront distribution |
| docs.brillianideas.com                                           | A     | Yes   | d24a7q0jdds7kb.cloudfront.net.                      | Maps subdomain to the IP of the CloudFront distribution for BrillianDocs |
| imbit.brillianideas.com                                          | A     | No    | 3.66.131.100                                        | Maps subdomain to the IP address of the Wordpress page (actually managed through the Lightsail DNS!) |
| www.brillianideas.com                                            | CNAME | No    | brillianideas.com                                   | Redirects www requests to root domain |
| www.docs.brillianideas.com                                       | CNAME | No    | www.brillianideas.com                               | Redirects www requests to root domain |
| _424a8a3a059b306187fb0c3004383621.brillianideas.com              | CNAME | No    | _cb31acd4fa6703cf7c048816d909672d.tljzshvwok.acm-validations.aws.| Domain verification record for AWS Certificate Manager |
| 66njepsccuxjo7tcmr34nkxzlnnvgbsv._domainkey.brillianideas.com    | CNAME | No    | 66njepsccuxjo7tcmr34nkxzlnnvgbsv.dkim.amazonses.com | DKIM record for AmazonSES |
| wouurah7of3osexererygt7s4adxzbvv._domainkey.brillianideas.com    | CNAME | No    | wouurah7of3osexererygt7s4adxzbvv.dkim.amazonses.com| DKIM record for AmazonSES |
| zom55upkpyudmnrgsx3grqnrhk3fpvoe._domainkey.brillianideas.com    | CNAME | No    | zom55upkpyudmnrgsx3grqnrhk3fpvoe.dkim.amazonses.com| DKIM record for AmazonSES |
| _4591ec5b3f6a433f16411f21c8c7c781.docs.brillianideas.com         | CNAME | No    | _318650309665af01929b62bffb5f6c97.sdgjtdhdhz.acm-validations.aws. | Domain verification record for AWS Certificate |
| _5d48c25767e3a69d7958afe924b18bd2.www.docs.brillianideas.com     | CNAME | No    | _53ea2ae8d268386502aec7d5aea89d64.sdgjtdhdhz.acm-validations.aws. | Domain verification record for AWS Certificate |
| _ee875fa9e11c65364b8e30391ef2839a.www.brillianideas.com          | CNAME | No    | _5b611db584806496551738f175d5c772.tljzshvwok.acm-validations.aws. | Domain verification record for AWS Certificate |
| mail.brillianideas.com                                           | MX    | No    | 10 feedback-smtp.eu-west-1.amazonses.com            | Mail exchange record for AWS SES              |
| brillianideas.com                                                | NS    | No    | ns-1607.awsdns-08.co.uk.                            | Name server record                           |
| brillianideas.com                                                | NS    | No    | ns-1085.awsdns-07.org.                              | Name server record                           |
| brillianideas.com                                                | NS    | No    | ns-359.awsdns-44.com.                               | Name server record                           |
| brillianideas.com                                                | NS    | No    | ns-718.awsdns-25.net.                               | Name server record                           |
| brillianideas.com                                                | SOA   | No    | ns-1607.awsdns-08.co.uk. awsdns-hostmaster.amazon.com. 1 7200 900 1209600 86400 | Start of authority record                    |
| _amazonses.brillianideas.com                                     | TXT   | No    | "Xjwp+BoUJhZqd/wNcqZ9azCXu/zqeqbS8bH27zMy8aE="     | TXT record for Amazon SES                    |
| _github-pages-challenge-imbit-mannheim.docs.brillianideas.com    | TXT   | No    | "cdbb5a3754bb98d49fb2233f3829ab"                    | GitHub Pages DNS challenge                   |
| mail.brillianideas.com                                           | TXT   | No    | "v=spf1 include:amazonses.com ~all"                 | SPF record for Amazon SES                    |
| _dmarc.mail.brillianideas.com                                    | TXT   | No    | "v=DMARC1;p=quarantine;pct=100;fo=1"               | DMARC quarantine record for email            |

</TabItem>

<TabItem value="brillianquiz">

| Name                                         | Type  | Alias | Value                                                     | Notes                                        |
|----------------------------------------------|-------|-------|-----------------------------------------------------------|----------------------------------------------|
| brillianquiz.com                             | A     | Yes   | d44wz0zejg2wr.cloudfront.net.                             | Maps domain to the IP of the CloudFront distribution |
| www.brillianquiz.com                         | CNAME | No    | brillianquiz.com                                          | Redirects www requests to root domain        |
| _77d87ffe10ab0bceff29020980b9cd3c.brillianquiz.com | CNAME | No    | _c67e2fcd4fe8162ef24090e351fa4940.qwknvqrlct.acm-validations.aws. | Domain verification record for AWS Certificate Manager |
| _f01b5d82b5df263850b71bf36daec563.www.brillianquiz.com | CNAME | No    | _7139c66877b222aefb2c5631b13642ec.sdgjtdhdhz.acm-validations.aws. | Domain verification record for AWS Certificate |
| brillianquiz.com                             | NS    | No    | ns-774.awsdns-32.net.                                     | Name server record |
| brillianquiz.com                             | NS    | No    | ns-1276.awsdns-31.org.                                    | Name server record |
|                                              |       |       | ns-310.awsdns-38.com.                                     | Name server record |
|                                              |       |       | ns-1807.awsdns-33.co.uk.                                  | Name server record |
| brillianquiz.com                             | SOA   |       | ns-774.awsdns-32.net. awsdns-hostmaster.amazon.com. 1 7200 900 1209600 86400 | Start of authority record |


</TabItem>

<TabItem value="brilliancrm">

| Name                                         | Type  | Alias | Value                                                     | Notes                                        |
|----------------------------------------------|-------|-------|-----------------------------------------------------------|----------------------------------------------|
| brilliancrm.com                              | A     | Yes   | d3afk01lmot4so.cloudfront.net.                            | Maps domain to the IP of the CloudFront distribution |
| www.brilliancrm.com                          | CNAME | No    | brilliancrm.com                                           | Redirects www requests to root domain        |
| _640b6e499834dd4af82f6c4a80ff66c2.brilliancrm.com | CNAME | No    | _df8fcdda00dc379959813dc61da98cef.tljzshvwok.acm-validations.aws. | Domain verification record for AWS Certificate Manager |
| _ed128d356aebb2cab6a55f86915d08ce.www.brilliancrm.com | CNAME | No    | _aaf65bf87b9fcb7889cd105ffeebd1b9.tljzshvwok.acm-validations.aws. | Domain verification record for AWS Certificate |
| brilliancrm.com                              | NS    | No    | ns-1233.awsdns-26.org.                                     | Name server record |
|                                              |       |       | ns-492.awsdns-61.com.                                      | Name server record |
|                                              |       |       | ns-1944.awsdns-51.co.uk.                                   | Name server record |
|                                              |       |       | ns-772.awsdns-32.net.                                      | Name server record |
| brilliancrm.com                              | SOA   | No    | ns-1233.awsdns-26.org. awsdns-hostmaster.amazon.com. 1 7200 900 1209600 86400 | Start of authority record |

</TabItem>

<TabItem value="brillianicm">

| Name                                       | Type  | Alias | Value                                                   | Notes                                        |
|--------------------------------------------|-------|-------|---------------------------------------------------------|----------------------------------------------|
| brillianicm.com                            | A     | Yes     | d3u7jacjxiarm3.cloudfront.net.                        | Maps the domain to the IP address of the cloudfront distribution |
| www.brillianicm.com                        | CNAME | No     | brillianicm.com                                        | Redirects www requests to root domain |
| _368e6af4ff5a4e74b63f30ab88b480ad.brillianicm.com | CNAME | No | _b54fd6b407b89c145d223cdd9f0d7312.tljzshvwok.acm-validations.aws. | Domain verification record for AWS Certificate Manager  |
| _824f68c0c2aac3394f10411743621e10.www.brillianicm.com | CNAME | No | _088ebed53ee5188f26a46b410af27374.tljzshvwok.acm-validations.aws. | Domain verification record for AWS Certificate |
| brillianicm.com                            | NS       | No    | ns-872.awsdns-45.net.                                  | Name server record                           |
|                                            |          |       | ns-354.awsdns-44.com.                                   |                                              |
|                                            |          |       | ns-1473.awsdns-56.org.                                  |                                              |
|                                            |          |       | ns-1636.awsdns-12.co.uk.                                |                                              |
| brillianicm.com                            | SOA      | No    | ns-872.awsdns-45.net. awsdns-hostmaster.amazon.com. 1 7200 900 1209600 86400 | Start of authority record |
</TabItem>

<TabItem value="imbit-n3xt">

| Name                                         | Type  | Alias | Value                                                     | Notes                                        |
|----------------------------------------------|-------|-------|-----------------------------------------------------------|----------------------------------------------|
| imbit-n3xt.com                               | A     | Yes   | dd30hbilqged6x5.cloudfront.net.                           | Maps the domain to the IP address of the cloudfront distribution |
| www.imbit-n3xt.com                           | CNAME | No    | imbit-n3xt.com                                            | Redirects www requests to root domain |
| _bcc914229131bb82db3a34834975ae7a.imbit-n3xt.com | CNAME | No    | _a5395a1c1af42243d9e03f0d2f9c8667.sdgjtdhdhz.acm-validations.aws. | Domain verification record for AWS Certificate Manager |
| _7647f79bc805dcc886644a75c52c06ee.www.imbit-n3xt.com | CNAME | No    | _9477ed1f24af672e783b6639ba206d09.sdgjtdhdhz.acm-validations.aws. | Domain verification record for AWS Certificate |
| imbit-n3xt.com                               | NS    | No    | ns-1847.awsdns-38.co.uk.                                  | Name server record |
|                                              | NS    | No    | ns-1446.awsdns-52.org.                                    |                    |
|                                              | NS    | No    | ns-488.awsdns-61.com.                                     |                    |
|                                              | NS    | No    | ns-974.awsdns-57.net.                                     |                    |
| imbit-n3xt.com                               | SOA   | No    | ns-1847.awsdns-38.co.uk. awsdns-hostmaster.amazon.com. 1 7200 900 1209600 86400 | Start of authority record |

</TabItem>


</Tabs>






## Networking Setup (in VPC Dashboard)

In our VPC Dashboard, we've structured the network to be both secure and efficient. Take a look at our subnet layout:

### Subnets Overview

| Name                | Subnet ID                 | IPv4 CIDR       | Availability Zone |
|---------------------|---------------------------|-----------------|-------------------|
| Public-EU-CENTRAL-1a| subnet-01a8c817059d12a4d  | 10.0.0.0/20     | eu-central-1a     |
| Public-EU-CENTRAL-1b| subnet-0717fdb65b0a31b38  | 10.0.16.0/20    | eu-central-1b     |
| BrillianCRM         | subnet-0439f43bf8fb29801  | 10.0.41.0/24    | eu-central-1b     |
| BrillianICM         | subnet-050a30c1bfc623361  | 10.0.42.0/24    | eu-central-1b     |
| BrillianIdeas       | subnet-0802987cab48623ee  | 10.0.43.0/24    | eu-central-1b     |
| BrillianQuiz        | subnet-0fdb84aa269bb45b7  | 10.0.44.0/24    | eu-central-1a     |
| IMBIT-N3xt          | subnet-01dbe3669b188c9de  | 10.0.45.0/24    | eu-central-1a     |


### Visual Overview

For a visual reference of our VPC setup, refer to the collapsible section below:

<details>
  <summary>IMBIT-VPC Overview Screenshot</summary>
  ![IMBIT-VPC Overview](vpc.png)
</details>