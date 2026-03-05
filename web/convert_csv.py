import csv
import json
import re

csv_data = """Type,Name,Provider,Funding Limit,Ideal Stage,Geography,Deadline,Eligibility,Sectors,Link
Grant,Startup India Seed Fund Scheme (SISFS),"DPIIT, Government of India",₹20 Lakh – ₹50 Lakh,"Idea, MVP",Pan India,Rolling applications via approved incubators,"DPIIT-recognized startup, Incorporated not more than 2 years ago",All Sectors,https://seedfund.startupindia.gov.in/
Grant,MeitY TIDE 2.0,Ministry of Electronics & IT,₹7L–₹15L (EiR) / Up to ₹30L (Grants),"Idea, MVP, Revenue",Pan India,Batch-based,"Indian startup or innovator, Working on IT/ITES product","DeepTech, AI/ML, IoT",https://tide.meity.gov.in/
Grant,NIDHI-PRAYAS (DST),Department of Science & Technology,Up to ₹10 Lakh,Idea,Pan India,Through TBI network (rolling),"Individual innovator or startup, Novel tech-based idea","Science & Technology, All Sectors",https://dst.gov.in/nidhi-prayas
Grant,NIDHI-EIR (Entrepreneur in Residence),Department of Science & Technology,"₹30,000/month for 18 months",Idea,Pan India,Rolling via incubators,"Indian citizen, Working on innovative technology idea","Science & Technology, All Sectors",https://dst.gov.in/nidhi-eir
Grant,NIDHI-SSP (Seed Support Program),Department of Science & Technology,Up to ₹25 Lakh,MVP,Pan India,Rolling via TBIs,"Incubated at DST-approved TBI, Tech-based startup","Science & Technology, All Sectors",https://dst.gov.in/
Grant,NIDHI-Accelerator Program,Department of Science & Technology,Up to ₹20 Lakh + mentorship,"MVP, Revenue",Pan India,Cohort-based,"Tech startup with MVP, Scalable business model",All Sectors,https://dst.gov.in/
Grant,BIRAC BIG (BioTech Ignition Grant),Biotechnology Industry Research Assistance Council,Up to ₹50 Lakh,"Idea, MVP",Pan India,Call-based (2-3 times/year),"Indian biotech startup, Registered company or LLP","HealthTech, BioTech, MedTech",https://birac.nic.in/
Grant,BIRAC SPARSH,BIRAC / DBT,Up to ₹50 Lakh,"Idea, MVP",Pan India,Call-based,"Indian startup, Affordable healthcare innovation","HealthTech, MedTech, Social Impact",https://birac.nic.in/
Grant,BIRAC Seed Fund,BIRAC,Up to ₹30 Lakh,"Idea, MVP",Pan India,Rolling via bio-incubators,"Incubated at BIRAC-supported bio-incubator, Biotech-based innovation","BioTech, HealthTech, AgriTech",https://birac.nic.in/
Grant,BIRAC BIPP (Industry Partnership),BIRAC,Up to ₹50 Crore (50% cost share),"Revenue, Scaling",Pan India,Call-based,"Indian biotech company, Product in advanced stage","BioTech, HealthTech, AgriTech",https://birac.nic.in/
Grant,RKVY-RAFTAAR,Ministry of Agriculture,Up to ₹25 Lakh,"Idea, MVP, Revenue",Pan India,Cohort-based (annual),"Agri-based startup, DPIIT recognition preferred","AgriTech, FoodTech, Rural Innovation",https://rkvy.nic.in/
Grant,SAMRIDH Scheme,MeitY,Up to ₹40 Lakh,"MVP, Revenue",Pan India,Through partner accelerators,"DPIIT-recognized startup, Product-based startup","DeepTech, AI/ML, IoT",https://samridh.meity.gov.in/
Grant,MSME Champion Scheme,Ministry of MSME,₹1 Lakh – ₹1 Crore (varies),"MVP, Revenue, Scaling",Pan India,Rolling,"Registered MSME, Udyam Registration required","Manufacturing, Services, All Sectors",https://msme.gov.in/
Grant,Atal Innovation Mission (AIM),NITI Aayog,Up to ₹10 Crore (for AICs),"Idea, MVP",Pan India,Program-specific,Incubated at AIC or AIC applicant,All Sectors,https://aim.gov.in/
Grant,Stand-Up India Scheme,Government of India,₹10 Lakh – ₹1 Crore (bank loan),"MVP, Revenue",Pan India,Rolling,"SC/ST or Women entrepreneur, Greenfield enterprise","Manufacturing, Services",https://www.standupmitra.in/
Grant,MUDRA Loan — Shishu,Government of India,"Up to ₹50,000",Idea,Pan India,Rolling (any bank),"Indian citizen, Non-farm small business",All Sectors,https://www.mudra.org.in/
Grant,MUDRA Loan — Kishore,Government of India,"₹50,000 – ₹5 Lakh","MVP, Revenue",Pan India,Rolling (any bank),"Indian citizen, Existing micro business",All Sectors,https://www.mudra.org.in/
Grant,MUDRA Loan — Tarun,Government of India,₹5 Lakh – ₹10 Lakh,"Revenue, Scaling",Pan India,Rolling (any bank),"Indian citizen, Established micro business",All Sectors,https://www.mudra.org.in/
Grant,CGTMSE Credit Guarantee,SIDBI + Ministry of MSME,Up to ₹5 Crore (guarantee),"Revenue, Scaling",Pan India,Rolling,"Micro or small enterprise, Applied through member lending institution","Manufacturing, Services",https://www.cgtmse.in/
Grant,PMEGP (Prime Minister Employment Generation),KVIC / Ministry of MSME,Up to ₹50 Lakh (Manufacturing) / ₹20 Lakh (Services) + 15-35% subsidy,"Idea, MVP",Pan India,Rolling,"18+ years, VIII pass for projects above ₹10L","Manufacturing, Services, All Sectors",https://www.kviconline.gov.in/pmegp/
Grant,SIDBI Fund of Funds for Startups,SIDBI / DPIIT,Indirect (via VC/AIF route),"MVP, Revenue, Scaling",Pan India,Ongoing,"DPIIT-recognized startup, Invested by SIDBI FFS-supported AIF",All Sectors,https://www.sidbi.in/
Grant,Startup India Women Entrepreneur Program,DPIIT,Varies (through SISFS + partners),"Idea, MVP, Revenue",Pan India,Rolling,"Women-founded/co-founded startup, DPIIT-recognized",All Sectors,https://www.startupindia.gov.in/
Grant,Make in India Initiative Support,DPIIT,Varies by PLI sector,"Revenue, Scaling",Pan India,Sector-specific,"Manufacturing startup, Meeting sector-specific thresholds","Manufacturing, Hardware, Electronics",https://www.makeinindia.com/
Grant,Digital India Programme,MeitY,Varies (project-based),"MVP, Revenue",Pan India,Project-specific,"Tech startup, Building digital public infrastructure solutions","GovTech, FinTech, EdTech",https://www.digitalindia.gov.in/
Grant,STPI NGIS (Next Gen Incubation Scheme),Software Technology Parks of India,Up to ₹25 Lakh + infrastructure,"Idea, MVP",Pan India (focus on Tier 2/3),Rolling,"Software product startup, DPIIT-recognized preferred","SaaS, AI/ML, IoT",https://ngis.stpi.in/
Grant,CSIR Innovation Award / Programs,Council of Scientific & Industrial Research,Up to ₹50 Lakh (project-based),"Idea, MVP",Pan India,Call-based,"Research-based startup, Collaboration with CSIR lab preferred","DeepTech, CleanTech, BioTech",https://www.csir.res.in/
Grant,ICAR NAIF (National Agricultural Innovation Fund),Indian Council of Agricultural Research,Up to ₹25 Lakh,"Idea, MVP, Revenue",Pan India,Call-based,"Agri innovation startup, Registered company","AgriTech, FoodTech",https://icar.org.in/
Grant,DRDO TDAC (Technology Development Acceleration Cell),Defence Research & Development Organisation,Up to ₹1.5 Crore,"MVP, Revenue",Pan India,Call-based,"Indian startup/MSME, Defence/dual-use technology","Defence, Aerospace, Cybersecurity",https://www.drdo.gov.in/
Grant,iDEX (Innovations for Defence Excellence),Ministry of Defence,Up to ₹1.5 Crore (DISC challenges),"Idea, MVP, Revenue",Pan India,Through DISC challenges,"Indian startup/MSME, Working on defence problem statements","Defence, Aerospace, Cybersecurity",https://idex.gov.in/
Grant,IN-SPACe (Indian National Space),Department of Space / ISRO,Facility access + project funding,"MVP, Revenue",Pan India,Rolling,"Indian space-tech startup, Meeting safety standards","SpaceTech, Aerospace, Defence",https://www.inspace.gov.in/
Grant,AYUSH Startup Challenge,Ministry of AYUSH,Up to ₹20 Lakh,"Idea, MVP",Pan India,Challenge-based,"AYUSH-sector startup, DPIIT-recognized preferred","HealthTech, Wellness, AYUSH",https://main.ayush.gov.in/
Grant,Smart City Innovation Challenge,Ministry of Housing & Urban Affairs,Up to ₹15 Lakh,"MVP, Revenue",Pan India (Smart Cities),Challenge-based,"Tech startup, Solution for urban challenges","UrbanTech, CleanTech, IoT",https://smartcities.gov.in/
Grant,SAGAR / Maritime Startup Scheme,"Ministry of Ports, Shipping & Waterways",Up to ₹25 Lakh,"Idea, MVP",Pan India,Challenge-based,"Maritime/port-tech startup, Indian registered company","Maritime, Logistics, CleanTech",https://sagarmala.gov.in/
Grant,iSTART (Textiles Accelerator),Ministry of Textiles,Up to ₹15 Lakh,"Idea, MVP",Pan India,Cohort-based,"Textile innovation startup, Indian company","TextileTech, Manufacturing, Fashion",https://texmin.nic.in/
Grant,NSIC Subsidies & Support,National Small Industries Corporation,Varies by program,"MVP, Revenue, Scaling",Pan India,Rolling,Registered MSME with Udyam,"Manufacturing, Services",https://www.nsic.co.in/
Grant,CLCSS (Credit Linked Capital Subsidy),Ministry of MSME,"15% subsidy, max ₹15 Lakh","Revenue, Scaling",Pan India,Rolling,"Existing MSME, Technology upgradation project",Manufacturing,https://msme.gov.in/
Grant,DBT-Wellcome Trust India Alliance,DBT + Wellcome Trust,Up to ₹2.5 Crore (fellowship),"Idea, MVP",Pan India,Annual call,"Indian biomedical researcher, PhD/MD holders preferred","BioTech, HealthTech, MedTech",https://www.indiaalliance.org/
Grant,MNRE Renewable Energy Subsidies,Ministry of New & Renewable Energy,30-70% capital subsidy,"MVP, Revenue, Scaling",Pan India,Program-specific,"Renewable energy project, Indian company/startup","CleanTech, Energy, Solar",https://mnre.gov.in/
Grant,NABARD Rural Innovation Fund,NABARD,Up to ₹25 Lakh,"Idea, MVP, Revenue",Pan India (Rural focus),Rolling,"Rural-focused innovation, Registered entity","AgriTech, Rural Innovation, FoodTech",https://www.nabard.org/
Grant,MeitY Gen-AI Startup Program,Ministry of Electronics & IT,Compute credits + grants,"Idea, MVP, Revenue",Pan India,Program-based,"Indian AI/ML startup, Building GenAI products","AI/ML, DeepTech",https://www.meity.gov.in/
Grant,Karnataka Elevate,Government of Karnataka,Up to ₹50 Lakh,"Idea, MVP",Karnataka,Annual cohort,"Registered in Karnataka, Innovation-driven product",All Sectors,https://startup.karnataka.gov.in/
Grant,Karnataka Idea2PoC Grant,Government of Karnataka,Up to ₹5 Lakh,Idea,Karnataka,Rolling,"Student or early innovator, Karnataka-based",All Sectors,https://startup.karnataka.gov.in/
Grant,Tamil Nadu Startup Seed Grant,StartupTN,Up to ₹10 Lakh,"Idea, MVP",Tamil Nadu,Rolling,"Registered in Tamil Nadu, DPIIT-recognized preferred",All Sectors,https://startuptn.in/
Grant,TANSEED (Tamil Nadu Startup Seed Fund),StartupTN,Up to ₹10 Lakh,"MVP, Revenue",Tamil Nadu,Batch-based,"Tamil Nadu startup, Incubated at approved incubator",All Sectors,https://startuptn.in/
Grant,Kerala Startup Mission (KSUM) Grants,Kerala Startup Mission,Up to ₹15 Lakh,"Idea, MVP, Revenue",Kerala,Rolling,"Registered in Kerala, Innovation-driven startup","DeepTech, HealthTech, EdTech",https://startupmission.kerala.gov.in/
Grant,KSUM Idea Grant,Kerala Startup Mission,Up to ₹2 Lakh,Idea,Kerala,Rolling,"Kerala-based innovator, Student or first-time entrepreneur",All Sectors,https://startupmission.kerala.gov.in/
Grant,T-Prize (Telangana),Government of Telangana,Up to ₹15 Lakh,"MVP, Revenue",Telangana,Challenge-based,"Indian startup, Solution for Telangana-specific challenges","HealthTech, EdTech, AgriTech",https://www.telangana.gov.in/
Grant,Telangana Innovation Policy Support,Government of Telangana / T-Hub,Fiscal incentives + ₹2L patent reimbursement,"Idea, MVP, Revenue",Telangana,Rolling,Startup registered in Telangana,All Sectors,https://t-hub.co/
Grant,Maharashtra Startup Yatra/Week Grants,Maharashtra State Innovation Society,Up to ₹15 Lakh,"Idea, MVP",Maharashtra,Annual,Maharashtra-based startup,All Sectors,https://msins.in/
Grant,Maharashtra FinTech Excellence Fund,Maharashtra State Innovation Society,Up to ₹15 Lakh + pilot access,"MVP, Revenue",Maharashtra,Cohort-based,"FinTech startup, Maharashtra-based",FinTech,https://msins.in/
Grant,Gujarat Startup & Innovation Policy,Government of Gujarat / iCreate,Up to ₹30 Lakh + subsidies,"Idea, MVP, Revenue",Gujarat,Rolling,"Startup registered in Gujarat, DPIIT-recognized",All Sectors,https://startupgujarat.in/
Grant,iStart Rajasthan,Government of Rajasthan,Up to ₹25 Lakh,"Idea, MVP, Revenue",Rajasthan,Rolling,Rajasthan-based startup,All Sectors,https://istart.rajasthan.gov.in/
Grant,MP Startup Policy & Incubation Fund,Government of Madhya Pradesh,Up to ₹10 Lakh,"Idea, MVP",Madhya Pradesh,Rolling,MP-registered startup,All Sectors,https://startup.mp.gov.in/
Grant,UP Startup Policy,Government of Uttar Pradesh,Up to ₹10 Lakh,"Idea, MVP",Uttar Pradesh,Rolling,Startup registered in UP,All Sectors,https://startup.up.gov.in/
Grant,West Bengal Startup Policy,Government of West Bengal,Up to ₹5 Lakh seed + subsidies,"Idea, MVP",West Bengal,Rolling,WB-registered startup,All Sectors,https://wbstartup.gov.in/
Grant,AP Innovation Society (APIS) Grants,Government of Andhra Pradesh,Up to ₹15 Lakh,"Idea, MVP",Andhra Pradesh,Rolling,AP-registered startup,All Sectors,https://apisociety.ap.gov.in/
Grant,Punjab Startup & Innovation Policy,Government of Punjab,Up to ₹10 Lakh + subsidies,"Idea, MVP",Punjab,Rolling,Punjab-registered startup,All Sectors,https://pbindustries.gov.in/
Grant,Haryana Startup Policy,Government of Haryana,Up to ₹10 Lakh,"Idea, MVP",Haryana,Rolling,Haryana-registered startup,All Sectors,https://haryanastartup.gov.in/
Grant,Goa Startup Policy,Government of Goa / Goa Startup Mission,Up to ₹15 Lakh,"Idea, MVP",Goa,Rolling,Goa-registered startup,All Sectors,https://startup.goa.gov.in/
Grant,Odisha Startup Policy,Government of Odisha / Startup Odisha,Up to ₹10 Lakh,"Idea, MVP",Odisha,Rolling,Odisha-registered startup,All Sectors,https://startupodisha.gov.in/
Grant,Assam Startup Policy — The Nest,Government of Assam / IIM Calcutta Innovation Park,Up to ₹10 Lakh,"Idea, MVP",Assam / North-East,Cohort-based,Assam/NE-registered startup,All Sectors,https://startupindia.gov.in/
Grant,Delhi Startup Policy,Government of Delhi,Up to ₹10 Lakh,"Idea, MVP",Delhi NCR,Rolling,Delhi-registered startup,All Sectors,https://startup.delhi.gov.in/
Grant,Jharkhand Startup Policy,Government of Jharkhand,Up to ₹10 Lakh,"Idea, MVP",Jharkhand,Rolling,Jharkhand-registered startup,All Sectors,https://jharkhandstartup.gov.in/
Grant,Chhattisgarh Startup Policy,Government of Chhattisgarh,Up to ₹10 Lakh,"Idea, MVP",Chhattisgarh,Rolling,CG-registered startup,All Sectors,https://startupindia.gov.in/
Grant,Meghalaya Startup Policy (PRIME Hub),Government of Meghalaya,Up to ₹5 Lakh,"Idea, MVP",Meghalaya / North-East,Rolling,Meghalaya or NE-based startup,All Sectors,https://prime.meghalaya.gov.in/
Grant,Bihar Startup Policy,Government of Bihar,Up to ₹10 Lakh,"Idea, MVP",Bihar,Rolling,Bihar-registered startup,All Sectors,https://startup.bihar.gov.in/
Grant,Startup India IP Filing Support,DPIIT,80% patent rebate + 50% trademark rebate,"Idea, MVP, Revenue, Scaling",Pan India,Ongoing,DPIIT-recognized startup,All Sectors,https://www.startupindia.gov.in/
Grant,Startup India Tax Exemption (80-IAC),DPIIT / CBDT,Tax exemption,"Revenue, Scaling",Pan India,Ongoing,"DPIIT-recognized, Incorporated after April 2016",All Sectors,https://www.startupindia.gov.in/
Grant,Angel Tax Exemption (Section 56),DPIIT / CBDT,Tax exemption on investments,"MVP, Revenue",Pan India,Ongoing,"DPIIT-recognized startup, Aggregate share premium <= ₹25 Cr",All Sectors,https://www.startupindia.gov.in/"""

def slugify(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9 ]', '', text)
    text = text.replace(' ', '-')
    return text

reader = csv.DictReader(csv_data.splitlines())
grants = []
for row in reader:
    grant = {
        "id": slugify(row["Name"]),
        "name": row["Name"],
        "type": row["Type"],
        "provider": row["Provider"],
        "fundingSupport": row["Funding Limit"],
        "idealStage": row["Ideal Stage"],
        "location": row["Geography"],
        "deadline": row["Deadline"],
        "criteria": row["Eligibility"],
        "focusSector": row["Sectors"],
        "website": row["Link"]
    }
    grants.append(grant)

with open("d:\\the starup school\\web\\lib\\data\\grants.ts", "w", encoding="utf-8") as f:
    f.write("export interface Grant {\n")
    f.write("    id: string;\n")
    f.write("    name: string;\n")
    f.write("    type: string;\n")
    f.write("    provider: string;\n")
    f.write("    fundingSupport: string;\n")
    f.write("    idealStage: string;\n")
    f.write("    location: string;\n")
    f.write("    deadline: string;\n")
    f.write("    criteria: string;\n")
    f.write("    focusSector: string;\n")
    f.write("    website: string;\n")
    f.write("}\n\n")
    f.write("export const grantsData: Grant[] = ")
    f.write(json.dumps(grants, indent=4))
    f.write(";\n")
