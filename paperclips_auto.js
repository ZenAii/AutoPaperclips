(() => {
  if (window.__paperclips_auto === true) return;
  window.__paperclips_auto = true;

  let cache = {};

  const AcceptOffer = false;
  const MaxMemory = 250;
  const MemoryToProcessorsRatio = 2;
  const PreferredStrategyIndex = 4;
  const SwarmComputingLevel = 150;
//Phase 1 (pas sûr) prix des clips, investissements, autoclippers
  const MinWire = 10;
  const MaxMarketing = 14;
  const MinClipPrice = 0.01;
  const MaxClipPrice = 1.00;
  const UnsoldClipsToSalesRatio = 10;
  const AutoclipperToMarketingRatio = 12;
  const MaxAutoclippers = 100;
  const MaxMegaclippers = 80;
  const MaxAutoclippersForManualClipping = 20;
  const InvestmentStrategyIndex = 2; // High risk
  const MinWireForInvestment = 5000;
  const MinPassiveInvestmentLevel = 30000;
  const MinActiveInvestmentLevel = 10000000;
  const MinFundsForActiveInvestment = 900000;
//Phase 2 drones, batteries, fermes solaires
  const MaxDrones = 50000;
  const MaxFactories = 160;
  const PowerProductionBias = 100;
  const StorageToPowerProductionRatio = 70;
  const DroneToFactorySquaredRatio = 7;
  const FarmDroneBias = 200;
  /*
  // Phase 3 gestion des sondes
  const MaxProbeSpeed = ;
  const MaxProbeNav = ;
  const MaxProbeRep = ;
  const MaxProbeHaz = ;
  const MaxProbeFac = ;
  const MaxProbeHarv = ;
  const MaxProbeWire = ;
  // non-combat probes
  const ProbeSpeedPercent = ; 
  const ProbeNavPercent = ;
  const ProbeRepPercent = ;
  const ProbeHazPercent = ;
  const ProbeFacPercent = ;
  const ProbeHarvPercent = ;
  const ProbeWirePercent = ;
  const ProbeCombatPercent = ;
  /*
})();
