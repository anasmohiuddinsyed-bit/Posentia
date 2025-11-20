// Email collection utility
// Can be integrated with Google Sheets API, Notion API, or your backend

export interface LeadData {
  name: string;
  email: string;
  company?: string;
  locations?: string;
  message?: string;
  country: "US" | "UAE";
  source: "demo-form" | "csv-upload" | "pricing";
  timestamp: string;
}

export const collectLead = async (data: LeadData): Promise<boolean> => {
  try {
    // For now, log to console
    // In production, send to your backend/Google Sheets API
    console.log("Lead collected:", data);

    // Example Google Sheets integration (uncomment when ready):
    /*
    const response = await fetch('/api/collect-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.ok;
    */

    // For demo: Store in localStorage (temporary)
    const leads = JSON.parse(localStorage.getItem('posentia_leads') || '[]');
    leads.push(data);
    localStorage.setItem('posentia_leads', JSON.stringify(leads));

    return true;
  } catch (error) {
    console.error("Failed to collect lead:", error);
    return false;
  }
};

// Helper to export leads as CSV (for manual Google Sheets import)
export const exportLeadsToCSV = (): string => {
  const leads = JSON.parse(localStorage.getItem('posentia_leads') || '[]');
  if (leads.length === 0) return '';

  const headers = Object.keys(leads[0]).join(',');
  const rows = leads.map((lead: LeadData) => 
    Object.values(lead).map(val => `"${val}"`).join(',')
  );
  
  return [headers, ...rows].join('\n');
};

